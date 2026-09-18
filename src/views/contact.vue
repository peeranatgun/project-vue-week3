<template>
  <div class="container mt-4">
    <!-- หัวข้อหน้า -->
    <h2 class="text-bg-dark p-3">รายชื่อติดต่อ</h2>
    
    <!-- ตารางแสดงข้อมูลลูกค้า -->
     <div class="text-end mb-3"><a href="/add_contact" class="btn btn-success">
      Add+</a>
    </div>
    <table class="table table-bordered table-striped">
      <thead class="table-dark">
        <tr>
          <th>ลำดับที่</th>        <!-- index -->
          <th>รหัสการติดต่อ</th>     <!-- customer_id -->
          <th>หัวข้อ</th>            <!-- firstName -->
          <th>รายละเอียด</th>        <!-- lastName -->
          <th>ชื่อ-นามสกุล</th>       <!-- phone -->
          <th>Email</th>      <!-- username -->
          <th>วันที่-เวลา</th>
        </tr>
      </thead>

      <tbody>
        <!-- วนลูปข้อมูล customers -->
        <tr v-for="(item,index) in contacts" :key="item.contact_id">
          <td>{{ index + 1 }}</td>       <!-- แสดงลำดับที่ (เริ่มจาก 1) -->
          <td>{{ item.contact_id }}</td> <!-- รหัสลูกค้า -->
          <td>{{ item.subject }}</td>   <!-- ชื่อ -->
          <td>{{ item.detail }}</td>    <!-- นามสกุล -->
          <td>{{ item.fullname }}</td>       <!-- เบอร์โทร -->
          <td>{{ item.email }}</td>    <!-- ชื่อผู้ใช้ -->
          <td>{{ item.created_at }}</td>    
        </tr>
      </tbody>
    </table>

    <!-- Loading: แสดงระหว่างรอข้อมูล -->
    <div v-if="loading" class="text-center">
      <p>กำลังโหลดข้อมูล...</p>
    </div>

    <!-- Error: แสดงเมื่อเกิดข้อผิดพลาด -->
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
  </div>
</template>
<script>
// import ฟังก์ชันจาก Vue (Composition API)
import { ref, onMounted } from "vue";

export default {
  name: "ContactList", // ชื่อ component

  setup() {
    // -----------------------------
    // state (ตัวแปร reactive)
    // -----------------------------
    const contacts = ref([]); // เก็บข้อมูลลูกค้า (array)
    const loading = ref(true); // สถานะโหลดข้อมูล
    const error = ref(null);   // เก็บ error

    // -----------------------------
    // ฟังก์ชันดึงข้อมูลจาก API
    // -----------------------------
    const fetchdata = async () => {
      try {
        // เรียก API (PHP)
        const response = await fetch("http://localhost/project-vue-week3/php_api/show_contact.php");

        // ตรวจสอบว่าการเรียกสำเร็จหรือไม่
        if (!response.ok) {
          throw new Error("ไม่สามารถดึงข้อมูลได้");
        }

        // แปลง response เป็น JSON
        contacts.value = await response.json();

      } catch (err) {
        // ถ้า error ให้เก็บข้อความไว้แสดง
        error.value = err.message;

      } finally {
        // ไม่ว่าจะสำเร็จหรือ error ให้หยุด loading
        loading.value = false;
      }
    };

    // -----------------------------
    // lifecycle: ทำงานเมื่อ component โหลดเสร็จ
    // -----------------------------
    onMounted(() => {
      fetchdata(); // เรียก API ทันที
    });

    // -----------------------------
    // return ค่าไปใช้ใน template
    // -----------------------------
    return {
      contacts,
      loading,
      error
    };
  }
};
</script>
<style lang="">
    
</style>