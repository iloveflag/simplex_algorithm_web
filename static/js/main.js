function submit() {
    form = document.getElementById('form');

    while (form.firstChild) {
        form.removeChild(form.firstChild);
    }
    var input = document.createElement('input');
    input.setAttribute('id', 'max_number');
    input.setAttribute('name', 'max_number');
    input.setAttribute('type', 'hidden');
    form.appendChild(input);

    var input = document.createElement('input');
    input.setAttribute('id', 'equation_number');
    input.setAttribute('name', 'equation_number');
    input.setAttribute('type', 'hidden');
    form.appendChild(input);

    var span = document.createElement('span')
    span.innerText = "max z=";
    max_number = document.getElementById('max_number_input').value;
    equation_number = document.getElementById('equation_number_input').value;

    document.getElementById('max_number').value = max_number;
    document.getElementById('equation_number').value = equation_number;

    for (var i = 0; i <= equation_number; i++) {
        if (i == 0) {
            form.appendChild(span);
        }
        for (var j = 0; j < max_number; j++) {
            var selectList = document.createElement("select");
            selectList.id = "action" + i + "_" + (j + 1);
            selectList.name = "action" + i + "_" + (j + 1);

            var optionplus = document.createElement("option"); //optionplus
            optionplus.value = 'plus';
            optionplus.text = '+';
            selectList.appendChild(optionplus);

            var optionreduce = document.createElement("option"); //optionreduce
            optionreduce.value = 'reduce';
            optionreduce.text = '-';
            selectList.appendChild(optionreduce);
            form.appendChild(selectList);



            var input = document.createElement('input'); //创建input节点
            var spanx = document.createElement('span');
            spanx.innerText = "x" + String(j + 1);
            input.setAttribute('id', 'number' + i + '_' + (j + 1));
            input.setAttribute('name', 'number' + i + '_' + (j + 1));
            form.appendChild(input);
            form.appendChild(spanx);
        }
        if (i != 0) {
            var spand = document.createElement('span');
            spand.innerText = "=";
            form.appendChild(spand);

            var inputb = document.createElement('input');
            inputb.setAttribute('id', 'value' + i);
            inputb.setAttribute('name', 'value' + i);
            form.appendChild(inputb);
        }
        var br = document.createElement("div");
        br.innerHTML = "<br/>";
        form.appendChild(br);
    }

    var button = document.createElement('button');
    button.innerText = "下一步";
    form.appendChild(button);
}