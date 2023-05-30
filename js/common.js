function popupXmov(path, xMd){
    $('#'+xMd).removeClass('show');
    $('.modal-backdrop').remove();
    $('body').removeClass('modal-open');
    console.log(path);
    go2path(path);
}

function go2path(path){
    location.href=path+'.html';
}

function tooltipMmt() {
    
    $('html').click(function(e) {
        if($(e.target).hasClass("t-area")) {
            $('#tooltip').addClass('d-block');
        } else {
            $('#tooltip').removeClass('d-block');
        }
    });
}

function numMax(e) {
    if(e.value.length > e.maxLength){
        e.value = e.value.slice(0, e.maxLength);
    }
}


function checkedCheck (e){
    // console.log($(e).attr('id'));
    var eID = $(e).attr('id');
    var privacyRow = $('#privacyTbl tbody input:checked').length;
    var surveyRow = $('#surveyTbl tbody input:checked').length;
    
    console.log('eID: ', eID);

    switch (eID) {
        case '' :
            console.log('no id');
            alert('unknown error');
        return false;

        case 'privacyCkDown' :

            if(privacyRow) {
                // load this data to download
                alert('다운로드 되었습니다(test)');
            } else if(!privacyRow){
                alert('다운로드할 항목을 체크해주세요');
            }

            break;

        case 'surveyCkDown' :
            if(surveyRow) {
                // load this data to download
                alert('다운로드 되었습니다(test)');
            } else if(!surveyRow){
                alert('다운로드할 항목을 체크해주세요');
            }

            break;

        case 'privacyDownAll' :

            if(confirm('전체 자료를 다운 받으시겠습니까?')){
                alert('전체 자료를 받았습니다(test)')
                //받는코드
            } else {
                alert('취소됐습니다.');
            }
            break;

        case 'surveyDownAll' :

            if(confirm('전체 자료를 다운 받으시겠습니까?')){
                alert('전체 자료를 받았습니다(test)')
                //받는코드
            } else {
                alert('취소됐습니다.');
            }
            break;

        case 'privacyCkDel' :        
            if(privacyRow) {
                if(confirm('선택 항목이 삭제됩니다. 계속 하시겠습니까?')){
                    alert('해당 항목이 삭제 되었습니다(test)');
                } else {
                    alert('취소됐습니다.');
                }
            } else if(!privacyRow){
                alert('다운로드할 항목을 체크해주세요');
            }

        case 'surveyCkDel' :
            if(surveyRow) {
                if(confirm('선택 항목이 삭제됩니다. 계속 하시겠습니까?')){
                    alert('해당 항목이 삭제 되었습니다(test)');
                } else {
                    alert('취소됐습니다.');
                }
            } else if(!surveyRow){
                alert('다운로드할 항목을 체크해주세요');
            }
    }
}

function schCust(word) {
    console.log($(word).val());
    // word가 포함된 단어로된 고객사가 있을때 printCust()실행 + 해당 기업회원에게 검색된 기업 관리 권한 부여

    var gtLeng = $('.bootstrap-tagsinput .tag').length;
    const gtid = 'gt'+gtLeng;
    var relDiv = $('.bootstrap-tagsinput');
    var groupTag = '<span id="'+gtid+'" class="tag label">'+$(word).val()+'<span onclick="delGroupTag(this)" data-role="remove"></span></span>';
    if(gtLeng == 0) {
        relDiv.css('display','block');
        relDiv.append(groupTag);
    } else {
        relDiv.append(groupTag);
    }
    $('input[name=custSchIp]').val('');
}

function delGroupTag (e) {
    var delEId = e.parentNode.id;
    dLeng = $('.bootstrap-tagsinput .tag').length;
    $('#'+delEId).remove();
    
    if(dLeng==1){
        $('.bootstrap-tagsinput').css('display','none');
    }
}

function saveCustInfo (){
    var custInfoForm = $('#custInfo').serialize();
    console.log('custInfoForm: ',custInfoForm);
    spinerModal();
    $('#saveCustInfoMd').remove();
}

function qrUrlCopy () {
    var copyText = document.getElementById('qrImg');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    alertShow(' : QR 이미지 주소가 복사되었습니다.');
    setTimeout(function(){
        alertNone();
    },1500);
}

function movLink(movSelector){

    var selector = $('#'+movSelector);
    var scrollValue = selector.offset();
    //$(selector).scrollTop(scrollValue.top);
    var objHeight = selector.outerHeight();

    console.log('objHeight:',objHeight);
    $('html, body').animate({scrollTop : scrollValue.top - (objHeight+180)}, 200);

    // css
    selector.addClass('bg-point');
    setTimeout(function(){
        selector.removeClass('bg-point');
    },1200);
    
}


function joinStatPrint (stVal){
    $('#stBtn').children().remove();
    // 가입상태 표기(statVal) 에 따라 ui에 회원상태 출력
    var appendPoint = $('#stBtn');
    var statBtn = {};
      statBtn.sbMs = '<button onclick="movLink(\'memStat\')" class="btn btn-danger disabled">미승인 회원</button>';
      statBtn.sbSi = '<button onclick="movLink(\'memStat\')" class="btn btn-info disabled">승인 회원</button>';
      statBtn.sbBr = '<button onclick="movLink(\'memStat\')" class="btn btn-purple disabled">보류 회원</button>';
      statBtn.sbTt = '<button onclick="movLink(\'memStat\')" class="btn btn-secondary disabled">탈퇴 회원</button>';
    switch (stVal){
      case 'sbMs':
        appendPoint.append(statBtn.sbMs);
        break;
      case 'sbSi':
        appendPoint.append(statBtn.sbSi);
        break;
      case 'sbBr':
        appendPoint.append(statBtn.sbBr);
        break;
      case 'sbTt':
        appendPoint.append(statBtn.sbTt);
        break;
    }
  }

  function amountReq() {
    var chargAmountVal = $('#chargeAmount').serialize();
    console.log('chargAmountVal:',chargAmountVal);
    alert('console => chargAmountVal 확인'); 
  }

  function loadCustList() {
    var regCustLeng = $('[id^=gt]').length;
    for(var i=0; i<regCustLeng; i++){
        var custItem ='';
        custItem = $('#gt'+i).text();
        $('.custList').append(custItem+' ');
        console.log('custItem:',custItem);
    }
    console.log('regCustLeng:',regCustLeng);
  }


  function setCustInfo() {
    var custId = $('#custInfo input[name="compId"]').val(),
        custName = $('#custInfo input[name="mngName"]').val(),
        custEmail=  $('#custInfo input[name="mngEmail"]').val();
        $('#detailTop h4.tx-roboto').append(custName);
        $('#detailTop span.compId').append(custId);
        $('#detailTop span.mngEmail').append(custEmail);
  }




  function passChkFn (chkType){
    var passA = $('#passA').val();
    var passB = $('#passB').val();
    var passC = 'asdf'; // 임시 패스워드 => 추후 저장된 각 패스워드 서버 로딩 필요
    var filePath = 'upload_file/'; // 임시 업로드파일 경로
    var fileName = 'example.xlsx'; // 임시 업로드파일명
    var adminStat = 'n'; // 관리자의 경우 y로 업데이트
    // 업로드파일 있을 경우 파일 경로 로딩, 매칭 필요
    switch (chkType) {
      case 'saveNew': // 신규 주문 등록
      // !필수 항목 작성 검증 추가 필요
        if(passA == '' || passB == '') {
          modalOpen("passChkF","Error: blank", "비밀번호를 입력해주세요.");
        } else if (passA != passB){
          modalOpen("passChkF", "Error: 패스워드 불일치", "패스워드를 확인해주세요.");
        } else if(passA == passB){
          modalOpen("passChkT");
        }
        break;
        // 등록 문장 추가
    case 'save': // 게시물 수정
        if(passA == '') {
            modalOpen("passChkF","Error: blank", "비밀번호를 입력해주세요.");
        } else if (passA != passC){
            modalOpen("passChkF", "Error: 패스워드 불일치", "패스워드를 확인해주세요.");
        } else if (passA == passC){
            modalOpen("passChkT",'','','수정되었습니다.');
        }
        break;
        // 업데이트 문장 추가
    case 'remove': // 게시물 삭제
        if(passA == '') {
            modalOpen("passChkF","Error: blank", "비밀번호를 입력해주세요.");
        } else if (passA != passC){
            modalOpen("passChkF", "Error: 패스워드 불일치", "패스워드를 확인해주세요.");
        } else if (passA == passC){
            modalOpen('rmvConfirm');
        }
        // 삭제 문장 추가
        break;
    case 'download': // 기 업로드된 파일 다운로드
        if(passA == '' && adminStat == 'n') {
            modalOpen("passChkF","Error: blank", "파일을 다운로드 하시려면 비밀번호를 입력해주세요.");
        } else if (passA !== passC && adminStat == 'n') {
            modalOpen("passChkF", "Error: 패스워드 불일치", "패스워드를 확인해주세요.");
        } else if (passA == passC && (adminStat == 'n' || adminStat == 'y')) {
            // 다운로드 동작 추가, java header 지정 내용 참고 https://krepo.tistory.com/3 혹은 다른방식 사용해도 무관
            console.log(filePath+fileName);
            $.fileDownload(filePath+fileName, {
                httpMethod: "POST",
                successCallback: function (url) {
                    alert('성공');
                },
                failCallback: function() {
                    alert('관리자에게 문의 주세요.');
                }
            });
        } else if(adminStat == 'y') {
            $.fileDownload(filePath+fileName, {
                httpMethod: "POST",
                successCallback: function () {
                    alert('성공');
                },
                failCallback: function() {
                    alert('관리자에게 문의 주세요.');
                }
            });
        }
    }
  }







