/* 
    DOM: document object model (mô hình tài liệu dạng đối tượng)
    Ai tạo ra dom?
        khi trang web được tải lên thì trình duyệt sẽ tạo ra mô hình cây DOM
        GIÚP:
            + thêm, sửa, xoá các phần tử HTML
            + thêm, sửa, xoá các thuộc tính của các ptu html
            + tạo sự kiện tương tác với giao diện(click, hover, submit...)

        CÁC THÀNH PHẦN TRONG DOM
        1.ELEMENT 
            Các cách lấy element
            + lấy theo id: document.getElementById("heading") ==> trả về duy nhất ĐỐI TƯỢNG ELEMENT vì id là duy nhất
            + lấy theo class: document.getElementsByClassName("title")
                ==> trả về HTML collection (gần giống mảng)
            + lấy theo tên thẻ (tagName): document.getElementsByTagName("p")
                ==> trả về HTML collection(gần giống mảng)
        2.ATRIBUTE : thuộc tính
        3.TEXT
            innerText
            innerHTML

        EVENT: sự kiện tương tác

    ĐỐI TƯỢNG THỰC TẾ: 
        THUỘC TÍNH
        PHƯƠNG THỨC

*/
function login() {
    console.log("Đăng nhập");
}
function checkInput() {
    console.log(111);
}
let elementH = {
    style: {
        color: "red"
    }
}
let flag = true;
function changeColor() {
    let elementH1 = document.getElementByClassName("title")[0];
    if(flag){
        elementH1.id="heading";
        flag = false;
    }else{
        elementH1.id="heading";
        flag=true;
    }
}





