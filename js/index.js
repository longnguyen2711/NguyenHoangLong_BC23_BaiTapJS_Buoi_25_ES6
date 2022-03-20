document.querySelector("#signup-form .actions ul li:last-child").onclick = () => {
    let arrInput = document.querySelectorAll("#signup-form input, #signup-form select");

    let infomation = {};
    for (let input of arrInput) {
      let { id, value } = input;
      infomation = { ...infomation, [id]: value };
    }

    let contentHTML = `
        <table class="mt-3">
            <tr class="decorate">
                <th width="80px">STT</th>
                <th width="275px">Nội dung khai báo</th>
                <th width="450px">Thông tin người khai báo</th>
                <br>
            </tr>
        </table>`;

    let arrTitle = {
      ten: "Tên",
      ho: "Họ",
      email: "Email",
      soDienThoai: "Số điện thoại",
      ngay: "Ngày sinh",
      thang: "Tháng sinh",
      nam: "Năm sinh",
      diaChi: "Địa chỉ",
      thongTinDiChuyen: "Thông tin chi chuyển",
      loaiNhiem: "Nghi nhiễm",
    };

    let count = 1;
    for (let key in infomation) {
      contentHTML += `
        <table>
            <tr class="decorate">
                <td width="80px">${count++}</td>
                <td width="275px">${arrTitle[key]}</td>
                <td width="450px">${infomation[key]}</td>
                <br>
            </tr>
        </table>`;
    }
    
    document.querySelector(".donate-us").innerHTML = contentHTML;
  };
