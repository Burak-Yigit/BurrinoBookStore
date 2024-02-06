var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/Admin/user/GetAll"
        },
        "columns": [
            { "data": "name", "width": "15%" },
            { "data": "email", "width": "15%" },
            { "data": "phoneNumber", "width": "15%" },
            { "data": "company.name", "width": "15%" },
            { "data": "role", "width": "15%" },
            {
                data: { id: "id",lockoutEnd:"lockoutEnd" },
                "render": function (data) {
                    var today = new Date().getTime();
                    var lockout = new Date(data.lockoutEnd).getTime();
                    if (lockout > today) {
                        return `
                       <div class="text-center">
    <a class="btn btn-success text-white" style="cursor:pointer; width:100px;">
        <i class="bi bi-unlock-fill"></i> Unlock
    </a>
    <a class="btn btn-danger text-white" style="cursor:pointer; width:150px;">
        <i class="bi bi-pencil-square"></i> Permission
    </a>
</div>
                        `
                    }
                    else {
                        return `
                        <div class="text-center">
    <a class="btn btn-danger text-white" style="cursor:pointer; width:100px;">
        <i class="bi bi-unlock-fill"></i> Lock
    </a>
    <a class="btn btn-danger text-white" style="cursor:pointer; width:150px;">
        <i class="bi bi-pencil-square"></i> Permission
    </a>
</div>
                        `
                    }
                    
                },
                "width": "15%"
            }
        ]
    });
}