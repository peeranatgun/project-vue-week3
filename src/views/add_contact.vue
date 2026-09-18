<template>
    <div class="container mt-4 col-md-4 bg-body-secondary ">
        <h2 class="text-center mb-3">ติดต่อเรา</h2>
        <form @submit.prevent="addContact">
            <div class="mb-2">
                <input v-model="contacts.subject" class="form-control" placeholder="หัวข้อ" required />
            </div>
            <div class="mb-2">
                <input v-model="contacts.detail" class="form-control" placeholder="รายละเอียด" required />
            </div>
            <div class="mb-2">
                <input v-model="contacts.fullname" class="form-control" placeholder="ชื่อ-นามสกุล" required />
            </div>
            <div class="mb-2">
                <input v-model="contacts.email" class="form-control" placeholder="Email" required />
            </div>
            <div class="text-center mt-4 ">
                <button type="submit" class="btn btn-primary mb-4">บันทึก</button> &nbsp;
                <button type="reset" class="btn btn-secondary mb-4">ยกเลิก</button>
            </div>
        </form>

        <div v-if="message" class="alert alert-info mt-3">
            {{ message }}
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            contacts: {
                subject: "",
                detail: "",
                fullname: "",
                email: "",

            },
            message: ""
        };
    },
    methods: {
        async addContact() {
            try {
                const res = await fetch("http://localhost/project-vue-week3/php_api/add_contact.php", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.contacts)
                });
                const data = await res.json();
                this.message = data.message;

                if (data.success) {
                    // ✅ เคลียร์ข้อมูลใน textbox หลังบันทึกสำเร็จ
                    this.contacts = { subject: "", detail: "", fullname: "", email: "" };
                }

            } catch (err) {
                this.message = "เกิดข้อผิดพลาด: " + err.message;
            }
        }
    }
}
</script>
