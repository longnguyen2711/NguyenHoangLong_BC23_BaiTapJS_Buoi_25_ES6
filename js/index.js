document.querySelector('#signup-form .actions ul li:last-child').onclick = () => {
    let arrInput = document.querySelectorAll('#signup-form input, #signup-form select');
    var arrTitle = ['Tên', 'Họ', 'Email', 'Số điện thoại', 'Ngày sinh', 'Tháng sinh', 'Năm sinh', 'Địa chị', 'Thông tin di chuyển', 'Nghi nhiễm']
    let infomation = {};
    for (let input of arrInput){
        let{id, value} = input;
        infomation = {...infomation, [id]: value}
    }
    console.log(infomation)

    let contentHTML =
    `<table class="mt-3">
        <tr class="decorate">
            <th width="80px">STT</th>
            <th width="250px">Nội dung khai báo</th>
            <th width="400px">Thông tin người khai báo</th>
            <br>
        </tr>
    </table>`;
    let count = 1;
    for(let key in infomation){
        contentHTML +=
        `<table>
            <tr class="decorate">
                <td width="80px">${count++}</td>
                <td width="250px">${key}</td>
                <td width="400px">${infomation[key]}</td>
                <br>
            </tr>
        </table>`
    }
    
    console.log(contentHTML)
    document.querySelector('.donate-us').innerHTML = contentHTML;
}