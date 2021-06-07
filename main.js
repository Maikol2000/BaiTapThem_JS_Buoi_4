// bài 1


/**
 * b1: nhập vào ngày tháng năm
 * b2: 
 * - Kiểm tra tháng đó có phải tháng cuối cùng của năm không?
 * - Kiểm tra ngày đó có phải ngày cuối cùng của tháng đó không? Phải tìm ra tháng đó có bao nhiêu ngày trước
    => Nếu thoả mãn cả 2 thì tăng năm lên 1 đơn vị và set tháng, ngày về 1
 * - Nếu không phải ngày cuối cùng của tháng đó thì chỉ cần tăng ngày lên 1
 * - Nếu ngày đó là ngày cuối cùng của tháng đó và tháng đó không phài tháng cuối cùng của năm thì set ngày vê 1 và thăng tháng lên 1
 * b3: xuất ra giá trị
 */

var ngayTruocDo = document.getElementById('ngayTruocDo').onclick = function () {
    var ngay = document.getElementById('ngay').value
    var thang = document.getElementById('thang').value
    var nam = document.getElementById('nam').value

    if(thang >13){
        alert('ngày tháng năm không hợp lệ')
    }
    if (ngay > 0 && thang > 0 && nam > 0) {
        
        if (thang == 1 || thang ==3|| thang==5||thang==7||thang==9||thang==11 && ngay > 0 && ngay <= 31) {
            ngay--

            if (thang==1 && ngay < 1 ) {
                ngay = 30
                thang = 12                
            } else if (thang==3 && ngay < 1 ) {
                ngay = 30
                thang = 2                
            } else if (thang==5 && ngay < 1 ) {
                ngay = 30
                thang = 4                
            } else if (thang==7 && ngay < 1 ) {
                ngay = 30
                thang = 6                
            } else if (thang==9 && ngay < 1 ) {
                ngay = 30
                thang = 8               
            } else if (thang==11 && ngay < 1 ) {
                ngay = 30
                thang = 10                
            }
        } else if (thang == 2 && ngay > 0 && ngay <= 28) {
            ngay--
            thang 
            if (thang ==2 && ngay < 1) {
                ngay = 31
                thang = 1
            }
        } else if (thang== 4||thang==6||thang==8|| thang==10||thang==12 && ngay > 0 && ngay <= 30) {
            ngay--
            thang 
            if (thang=4 && ngay < 1) {
                ngay = 31
                thang = 3
            } else if (thang==6 && ngay < 1 ) {
                ngay = 31
                thang = 5                
            } else if (thang==8 && ngay < 1 ) {
                ngay = 31
                thang = 7                
            } else if (thang==10 && ngay < 1 ) {
                ngay = 31
                thang = 9                
            } else if (thang==12 && ngay < 1 ) {
                ngay = 31
                thang = 11                
            }

        } else{
            alert('ngày tháng năm không hợp lệ')
            return
        }
        var hienThiNgayThangNam = document.getElementById('hienThiNgayThangNam').innerHTML = 'ngày: ' + ngay + ' tháng: ' + thang + ' năm: ' + nam;
        
    }

}


var ngayTiepTheo = document.getElementById('ngayTiepTheo').onclick = function () {
    var ngay = document.getElementById('ngay').value
    var thang = document.getElementById('thang').value
    var nam = document.getElementById('nam').value

    var soThang= thang;

    if(thang >13 && thang<1){
        alert('ngày tháng năm không hợp lệ')
    }

    if (ngay > 0 && thang > 0 && nam > 0) {
        
        if (thang == 1 || thang ==3|| thang==5||thang==7||thang==9||thang==11 && ngay > 0 && ngay <= 31) {
            ngay++

            if (thang==1 && ngay > 31 ) {
                ngay = 1
                thang = 2                
            } else if (thang==3 && ngay > 31 ) {
                ngay = 1
                thang = 4                
            } else if (thang==5 && ngay > 31 ) {
                ngay = 1
                thang = 6                
            } else if (thang==7 && ngay > 31 ) {
                ngay = 1
                thang = 8                
            } else if (thang==9 && ngay > 31 ) {
                ngay = 1
                thang = 10               
            } else if (thang==11 && ngay > 31 ) {
                ngay = 1
                thang = 12                
            }
        } else if (thang == 2 && ngay > 0 && ngay <= 28) {
            ngay++
            if (thang ==2 && ngay > 28) {
                ngay = 1
                thang = 3
            }
        } else if (thang== 4||thang==6||thang==8|| thang==10||thang==12 && ngay > 0 && ngay <= 30) {
            ngay++

            if (thang=4 && ngay > 30) {
                ngay = 1
                thang = 5
            } else if (thang==6 && ngay > 30 ) {
                ngay = 1
                thang = 7                
            } else if (thang==8 && ngay > 30 ) {
                ngay = 1
                thang = 9                
            } else if (thang==10 && ngay > 30 ) {
                ngay = 1
                thang = 11                
            } else if (thang==12 && ngay > 30 ) {
                ngay = 1
                thang = 1                
            }
        } else{
            alert('ngày tháng năm không hợp lệ')
            return
        }
        var hienThiNgayThangNam = document.getElementById('hienThiNgayThangNam').innerHTML = 'ngày: ' + ngay + ' tháng: ' + soThang + ' năm: ' + nam;
        
    }

}


// bài 2

/**
 * b1: nhập tháng năm
 * b2: xuất tháng người dùng nhập có bao nhiêu ngày tính cả tháng năm nhuận
 *  - nhập vào thang vd thang = 5 thì ngày sẽ là 31 cách 
 *  - cách 4 năm số ngày tháng 2 = 29 theo điềum kiện nam % 4===0 && nam%100 !==0 && nam % 400 !==0 || nam%100===0 && nam % 400===0
 * b3: xuất ra
 */

var dateOfMonth = document.getElementById('dateOfMonth').onclick = function() {

    var thang = document.getElementById('thang').value
    var nam = document.getElementById('nam').value
    var soNgay =document.getElementById('soNgay')


    if((nam % 4===0 && nam%100 !==0 && nam % 400 !==0)||(nam%100===0 && nam % 400===0)){
        if (thang = 2){
            soNgay.innerHTML = 'Số ngày của ' + thang + ' là 29 ngày' 
        }
        
    } else {
    
    if(thang == 1 ||thang==3||thang==5||thang==7||thang==9||thang==11 ){
        soNgay.innerHTML = 'Số ngày của ' + thang + ' là 31 ngày'
    } else if(thang==2){
        soNgay.innerHTML = 'Số ngày của ' + thang + ' là 28 ngày'
    }else if(thang==4||thang==6||thang==8||thang==10||thang==12){
        soNgay.innerHTML = 'Số ngày của ' + thang + ' là 30 ngày'
    }
}
}


// bài 3
/**
 * b1: nhập số nguyên 3 chữ số 
 * b2: 
 * - tách 3 chữ số thành từng số đơn vị 
 * - sử dụng switch case. Đặt cách đọc từ 0 -> 9 ch số đầu tiên nếu nhập số nào cách đọc số đó
 * - hai số còn lại cách làm tung tự
 * b3: xuất ra cách đọc
 */
var btnNumber = document.getElementById('btnNumber').onclick = function() {
    var number = document.getElementById('number').value

    debugger
    if(number < 0){
        var soNguyen = document.getElementById('soNguyen').innerHTML = 'số không được nhỏ hơn không'
        return
    }

    var soA = parseInt(number/100)
    var soB = parseInt(number%100/10)
    var soC = Math.abs(number%10)
    

    
    switch(soA){
        case soA=1: 
        soA = 'một'
        break
        case soA= 2:
        soA = 'hai'
        break
        case soA = 3: 
        soA = 'ba'
        break
        case soA = 4:
        soA = 'bốn'
        break
        case soA =5:
        soA ='năm'
        break
        case soA =6:
        soA = 'sáu'
        break
        case soA =7:
            soA ='bảy'
            break
        case soA =8:
            soA = 'tám'
            break
        case soA =9:
            soA = 'chin'
            break
        case soA =0:
            soA ='không'
            break
    }
    switch(soB){
        case soB=1: 
        soB = 'một'
        break
        case soB= 2:
        soB = 'hai'
        break
        case soB = 3: 
        soB = 'ba'
        break
        case soB = 4:
        soB = 'bốn'
        break
        case soB =5:
        soB ='năm'
        break
        case soB =6:
        soB = 'sáu'
        break
        case soB =7:
            soB ='bảy'
            break
        case soB =8:
            soB = 'tám'
            break
        case soB =9:
            soB = 'chin'
            break
        case soB =0:
            soB ='không'
            break
    }
    switch(soC){
        case soC=1: 
        soC = 'một'
        break
        case soC= 2:
        soC = 'hai'
        break
        case soC = 3: 
        soC = 'ba'
        break
        case soC = 4:
        soC = 'bốn'
        break
        case soC =5:
        soC ='năm'
        break
        case soC =6:
        soC = 'sáu'
        break
        case soC =7:
            soC ='bảy'
            break
        case soC =8:
            soC = 'tám'
            break
        case soC =9:
            soC = 'chin'
            break
        case soC =0:
            soC ='không'
            break
    }
    
    var soNguyen = document.getElementById('soNguyen').innerHTML = soA + " trăm " + soB + ' mươi ' + soC + ' ngàn'
    
}


// bài 4
/**
 * b1: cho biết tọa độ của trường là (0,0) còn lại là tọa độ tùy ý 
 * b2: tính khoảng cách từng người đến
 *  - trường bằng công thức Math.spt(Math.pow(Math.max(loca..,loca...)),2)
 * - so sánh các giá trị lấy giá trị lớn nhất
 * b3: xuất người xa trường nhất
 */

var loCa = document.getElementById('loCa').onclick = function(){

    var locaXA = parseInt(document.getElementById('locaXA').value)
    var locaXB = parseInt(document.getElementById('locaXB').value)

    var locaYA = parseInt(document.getElementById('locaYA').value)
    var locaYB = parseInt(document.getElementById('locaYB').value)

    var locaZA = parseInt(document.getElementById('locaZA').value)
    var locaZB = parseInt(document.getElementById('locaZB').value)

    var locaX0 = Math.sqrt(Math.pow((locaXA+locaXB),2)+0)
    var locaY0 = Math.sqrt(Math.pow((locaYA+locaYB),2)+0)
    var locaZ0 = Math.sqrt(Math.pow((locaZA+locaZB),2)+0)

    if(locaX0>locaY0 && locaX0>locaZ0){
        alert('Nguyễn Văn A xa trường nhất')
    } else if(locaY0>locaZ0 && locaY0>locaX0){
        alert('Nguyễn Văn B xa trường nhất')
    } else if(locaZ0>locaY0 && locaZ0>locaX0){
        alert('Nguyễn Văn C xa trường nhất')
    }

    
}