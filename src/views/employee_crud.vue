<template>
  <div class="container mt-4">
    <h2 class="mb-3">รายชื่อพนักงาน</h2>

    <div class="mb-3">
      <button class="btn btn-primary" @click="openAddModal">
        เพิ่มพนักงาน <i class="bi bi-plus-circle"></i>
      </button>
    </div>

    <div v-if="loading" class="text-center">
      <p>กำลังโหลดข้อมูล...</p>
    </div>

    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>

    <table class="table table-bordered table-striped">
      <thead class="table-primary">
        <tr>
          <th>ID</th>
          <th>ชื่อ</th>
          <th>นามสกุล</th>
          <th>เบอร์โทร</th>
          <th>ชื่อผู้ใช้</th>
          <th>แก้ไข/ลบ</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="employee in employees"
          :key="employee.emp_id"
        >
          <td>{{ employee.emp_id }}</td>
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.phone }}</td>
          <td>{{ employee.username }}</td>
          <td>
            <button
              class="btn btn-warning btn-sm"
              @click="openEditModal(employee)"
            >
              แก้ไข
            </button>

            <button
              class="btn btn-danger btn-sm ms-2"
              @click="deleteEmployee(employee.emp_id)"
            >
              ลบ
            </button>
          </td>
        </tr>

        <tr v-if="!loading && employees.length === 0">
          <td colspan="6" class="text-center">
            ไม่พบข้อมูลพนักงาน
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal เพิ่ม/แก้ไขพนักงาน -->
    <div class="modal fade" id="employeeModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ isEditMode ? "แก้ไขข้อมูลพนักงาน" : "เพิ่มพนักงานใหม่" }}
            </h5>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="saveEmployee">
              <div class="mb-3">
                <label class="form-label">ชื่อ</label>
                <input
                  v-model="editEmployee.firstName"
                  type="text"
                  class="form-control"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">นามสกุล</label>
                <input
                  v-model="editEmployee.lastName"
                  type="text"
                  class="form-control"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">เบอร์โทร</label>
                <input
                  v-model="editEmployee.phone"
                  type="text"
                  class="form-control"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">ชื่อผู้ใช้</label>
                <input
                  v-model="editEmployee.username"
                  type="text"
                  class="form-control"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="form-label">รหัสผ่าน</label>
                <input
                  v-model="editEmployee.password"
                  type="password"
                  class="form-control"
                  :required="!isEditMode"
                  :placeholder="
                    isEditMode
                      ? 'เว้นว่างไว้หากไม่ต้องการเปลี่ยนรหัสผ่าน'
                      : 'กรอกรหัสผ่าน'
                  "
                />
              </div>

              <button
                type="submit"
                class="btn btn-success"
                :disabled="saving"
              >
                {{
                  saving
                    ? "กำลังบันทึก..."
                    : isEditMode
                      ? "บันทึกการแก้ไข"
                      : "เพิ่มพนักงาน"
                }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as bootstrap from "bootstrap";

const API_URL =
  "http://localhost/project-vue-week3/php_api/employee_crud.php";

export default {
  name: "EmployeeList",

  setup() {
    const employees = ref([]);
    const loading = ref(true);
    const saving = ref(false);
    const error = ref(null);
    const editEmployee = ref({});
    const isEditMode = ref(false);

    let editModal = null;
    let modalElement = null;

    // โหลดข้อมูลพนักงาน
    const fetchEmployees = async () => {
      loading.value = true;
      error.value = null;

      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          employees.value = result.data;
        } else {
          error.value = result.message || "ไม่สามารถโหลดข้อมูลได้";
        }
      } catch (err) {
        error.value = "โหลดข้อมูลไม่สำเร็จ: " + err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      modalElement = document.getElementById("employeeModal");

      if (modalElement) {
        editModal = new bootstrap.Modal(modalElement);
      }

      fetchEmployees();
    });

    onBeforeUnmount(() => {
      if (editModal) {
        editModal.dispose();
        editModal = null;
      }
    });

    // เปิด Modal เพิ่มพนักงาน
    const openAddModal = () => {
      isEditMode.value = false;

      editEmployee.value = {
        firstName: "",
        lastName: "",
        phone: "",
        username: "",
        password: ""
      };

      editModal?.show();
    };

    // เปิด Modal แก้ไขพนักงาน
    const openEditModal = (employee) => {
      isEditMode.value = true;

      editEmployee.value = {
        emp_id: employee.emp_id,
        firstName: employee.firstName,
        lastName: employee.lastName,
        phone: employee.phone,
        username: employee.username,
        password: ""
      };

      editModal?.show();
    };

    // เพิ่มหรือแก้ไขพนักงาน
    const saveEmployee = async () => {
      if (saving.value) return;

      saving.value = true;

      const method = isEditMode.value ? "PUT" : "POST";

      try {
        const response = await fetch(API_URL, {
          method,
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editEmployee.value)
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "บันทึกข้อมูลไม่สำเร็จ");
        }

        alert(result.message);

        editModal?.hide();

        await fetchEmployees();
      } catch (err) {
        alert("เกิดข้อผิดพลาด: " + err.message);
      } finally {
        saving.value = false;
      }
    };

    // ลบพนักงาน
    const deleteEmployee = async (id) => {
      if (!confirm("คุณต้องการลบข้อมูลพนักงานนี้ใช่หรือไม่?")) {
        return;
      }

      try {
        const response = await fetch(API_URL, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ emp_id: id })
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error(result.message || "ลบข้อมูลไม่สำเร็จ");
        }

        alert(result.message);

        await fetchEmployees();
      } catch (err) {
        alert("เกิดข้อผิดพลาด: " + err.message);
      }
    };

    return {
      employees,
      loading,
      saving,
      error,
      editEmployee,
      isEditMode,
      openAddModal,
      openEditModal,
      saveEmployee,
      deleteEmployee
    };
  }
};
</script>