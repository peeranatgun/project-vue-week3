<template>
  <div class="container mt-4">
    <h2 class="mb-3">รายชื่อติดต่อ</h2>
    
    <div class="mb-3">
      <button class="btn btn-primary" @click="openAddModal">
        Add <i class="bi bi-plus-circle"></i>
      </button>
    </div>

    <table class="table table-bordered table-striped">
      <thead class="table-primary">
        <tr>
          <th>ลำดับที่</th>        <!-- index -->
          <th>รหัสการติดต่อ</th>     <!-- customer_id -->
          <th>หัวข้อ</th>            <!-- firstName -->
          <th>รายละเอียด</th>        <!-- lastName -->
          <th>ชื่อ-นามสกุล</th>       <!-- phone -->
          <th>Email</th>      <!-- username -->
          <th>วันที่-เวลา</th>
          <th>แก้ไข/ลบ</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="(item,index) in contatcs " :key="item.contact_id">
          <td>{{ index + 1 }}</td>       <!-- แสดงลำดับที่ (เริ่มจาก 1) -->
          <td>{{ item.contact_id }}</td> <!-- รหัสลูกค้า -->
          <td>{{ item.subject }}</td>   <!-- ชื่อ -->
          <td>{{ item.detail }}</td>    <!-- นามสกุล -->
          <td>{{ item.fullname }}</td>       <!-- เบอร์โทร -->
          <td>{{ item.email }}</td>    <!-- ชื่อผู้ใช้ -->
          <td>{{ item.created_at }}</td>    
         <td>
            <button class="btn btn-warning btn-sm" @click="openEditModal(item)">
              แก้ไข
            </button>
            |
            <button class="btn btn-danger btn-sm" @click="deleteCustomer(item.contact_id)">
              ลบ
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="loading" class="text-center"><p>กำลังโหลดข้อมูล...</p></div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <!-- ✅ Modal ใช้ทั้งเพิ่ม/แก้ไข -->
    <div class="modal fade" id="editModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditMode ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล" }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveCustomer">
              <div class="mb-3">
                <label class="form-label">subject</label>
                <input v-model="editCustomer.subject" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">detail</label>
                <input v-model="editCustomer.detail" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">ชื่อ-นามสกุล</label>
                <input v-model="editCustomer.fullname" type="text" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">email</label>
                <input v-model="editCustomer.email" type="text" class="form-control" required>
              </div>
            
              <button type="submit" class="btn btn-success">
                {{ isEditMode ? "บันทึกการแก้ไข" : "เพิ่มข้อมูล" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "CustomerList",
  setup() {
    const contatcs = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const editCustomer = ref({});
    const isEditMode = ref(false);
    let editModal = null;

    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost/project-vue-week3/php_api/contact_crud.php");
        const result = await response.json();

        if (result.success) {
          contatcs.value = result.data;
        } else {
          error.value = result.message;
        }
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchCustomers();
      const modalEl = document.getElementById("editModal");
      editModal = new window.bootstrap.Modal(modalEl);
    });

    // ✅ เปิด Modal เพิ่มลูกค้าใหม่
    const openAddModal = () => {
      isEditMode.value = false;
      editCustomer.value = {
        subject: "",
        detail: "",
        fullname: "",
        email: ""
 
      };
      editModal.show();
    };

    // ✅ เปิด Modal แก้ไขลูกค้า
    const openEditModal = (item) => {
      isEditMode.value = true;
      editCustomer.value = { ...item, password: "" };
      editModal.show();
    };

    // ✅ ใช้ฟังก์ชันเดียวสำหรับทั้งเพิ่ม/แก้ไข
    const saveCustomer = async () => {
      const url = "http://localhost/project-vue-week3/php_api/contact_crud.php";
      const method = isEditMode.value ? "PUT" : "POST";

      try {
        const response = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editCustomer.value)
        });

        const result = await response.json();

        if (result.success) {
          alert(result.message);
          fetchCustomers();
          editModal.hide();
        } else {
          alert(result.message);
        }
      } catch (err) {
        alert("เกิดข้อผิดพลาด: " + err.message);
      }
    };

    // ✅ ลบลูกค้า
    const deleteCustomer = async (id) => {
      if (!confirm("คุณต้องการลบข้อมูลนี้ใช่หรือไม่?")) return;
      try {
        const response = await fetch("http://localhost/project-vue-week3/php_api/contact_crud.php", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contact_id: id })
        });
        const result = await response.json();
        if (result.success) {
          contatcs.value = contatcs.value.filter(c => c.contact_id !== id);
          alert(result.message);
        } else {
          alert(result.message);
        }
      } catch (err) {
        alert("เกิดข้อผิดพลาด: " + err.message);
      }
    };

    return {
      contatcs,
      loading,
      error,
      editCustomer,
      isEditMode,
      openAddModal,
      openEditModal,
      saveCustomer,
      deleteCustomer
    };
  }
};
</script>
