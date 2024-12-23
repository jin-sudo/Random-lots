const aiResponses = {
    "山西有哪些景点": "山西拥有丰富的旅游资源，包括平遥古城、云冈石窟、晋祠、五台山等景点。每个景点都有其独特的魅力，平遥古城被誉为中国古代城市的活化石，而五台山则是佛教四大名山之一，吸引着无数游客前来朝圣",
    "山西的历史文化": "山西是中国历史文化的重要发源地之一，拥有着深厚的文化底蕴。晋商文化、云冈石窟、晋祠等都是山西历史文化的代表。山西被誉为‘中国的文化宝库’，不仅有丰富的历史遗产，还有源远流长的地方戏剧、传统工艺等。",
    "山西有哪些小吃": "山西的小吃种类繁多，口味独特。刀削面是最具代表性的山西美食之一，酿皮、油糕、过油肉也是不容错过的特色小吃。除此之外，山西的红枣、醋文化、羊杂割等也深受人们喜爱。",
};

function submitMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    const chatBox = document.getElementById('chat-box');
    
    // 用户输入的消息
    if (userInput !== "") {
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.innerHTML = `<p>${userInput}</p>`;
        chatBox.appendChild(userMessage);
        document.getElementById('user-input').value = ""; // 清空输入框
    }

    // 添加“正在思考...”的加载提示
    const loadingMessage = document.createElement('div');
    loadingMessage.classList.add('bot-message', 'loading');
    loadingMessage.innerHTML = "<p>正在思考...</p>";
    chatBox.appendChild(loadingMessage);

    // 模拟AI响应
    setTimeout(() => {
        // 移除加载提示
        loadingMessage.remove();

        // 获取AI的回答
        let aiMessage = aiResponses[userInput] || "抱歉，我不太明白您的问题，可以试试问我山西有哪些景点，山西的历史文化，山西有哪些小吃等问题";
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.innerHTML = `<p>${aiMessage}</p>`;
        chatBox.appendChild(botMessage);

        // 滚动到底部
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000); // 模拟1秒钟的延迟
}
