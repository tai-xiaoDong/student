let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1
        }
    };
    request.send();
};
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response);
            console.log(request.response);
            const bool = JSON.parse(request.response);
            console.log(typeof bool);
            console.log(bool);
        }
    };
    request.send();
};
//onreadystatechange 是load和error的升级版 
/*radystate 1 open 2 send 3成功加载第一个字节 4.成功加载全部

    staus 200-300以下 全部表示加载成功 */
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onload = () => {
        // 创建 div 标签
        const div = document.createElement("div");
        // 填写 div 内容
        div.innerHTML = request.response;
        // 插入到身体里
        document.body.appendChild(div);
    };
    request.onerror = () => { };
    request.send();
};
// ajax四步
getJS.onclick = () => {
    const request = new XMLHttpRequest();//第一步创建对象
    request.open("GET", "/2.js");//第二步调用open方法
    request.onload = () => {//第三步监听对象
        // 创建 script 标签
        const script = document.createElement("script");
        // 填写 script 内容
        script.innerHTML = request.response;
        // 插到身体里
        document.body.appendChild(script);
    };
    request.onerror = () => { };
    request.send();//第四步发送
};

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css"); // readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState);
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement("style");
                style.innerHTML = request.response;
                document.head.appendChild(style);
            } else {
                alert("加载 CSS 失败");
            }
        }
    };
    request.send(); // readyState = 2
};
