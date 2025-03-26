function convertText() {
    const inputText = document.getElementById("inputText").value;
    const fontName = document.getElementById("fontName").value || "맑은 고딕"; // 기본값 설정
    const fontSize = parseInt(document.getElementById("fontSize").value) || 17; // 기본값 17pt
    const outputText = document.getElementById("outputText");

    if (!inputText) {
        alert("텍스트를 입력해주세요!");
        return;
    }

    // 변환된 텍스트에 서식 정보 추가
    const convertedText = `${inputText}\n\n[적용할 서식: 글꼴=${fontName}, 크기=${fontSize}pt]`;
    outputText.textContent = convertedText;

    // 출력에 시각적 스타일 적용 (미리보기용)
    outputText.style.fontFamily = fontName; // 시스템에 글꼴이 없으면 대체
    outputText.style.fontSize = `${fontSize}px`; // pt 대신 px로 근사치 적용
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText").textContent;
    if (!outputText) {
        alert("변환된 텍스트가 없습니다!");
        return;
    }

    navigator.clipboard.writeText(outputText).then(() => {
        const fontName = document.getElementById("fontName").value || "맑은 고딕";
        const fontSize = document.getElementById("fontSize").value || 17;
        alert(`클립보드에 복사되었습니다. PPT에 붙여넣고 "${fontName}", ${fontSize}pt로 설정하세요.`);
    }).catch(err => {
        console.error("클립보드 복사 실패:", err);
    });
}