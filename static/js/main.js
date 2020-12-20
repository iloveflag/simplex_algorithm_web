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

function create_table(data) {
    var cj = data['cj'];
    var list = data['list'];
    var Cb = data['Cb'];
    var Xb = data['Xb'];
    var b = data['b'];
    var check = data['check'];
    var Theta = data['Theta'];
    var str1 = '';
    str1 += '<tr>';
    str1 += '<td colspan="3">cj</td>';
    for (var m = 0; m <= cj.length - 1; m++) {
        str1 += `<td>${cj[m]}</td>`;
    }
    str1 += '<td rowspan="2">θ</td>';
    str1 += '</tr>';
    for (var k = 0; k < list.length; k++) {
        str1 += '<tr>';
        str1 += '<td>Cb</td>';
        str1 += '<td>Xb</td>';
        str1 += '<td>b</td>';
        for (var p = 1; p <= list[0][0].length; p++) {
            str1 += '<td>x' + p + '</td>';
        }
        for (var i = 0; i <= list[k].length - 1; i++) {
            str1 += '<tr>';
            str1 += `<td>${Cb[k][i]}</td>`;
            str1 += `<td>x${Xb[k][i]}</td>`;
            str1 += `<td>${b[k][i]}</td>`;
            for (var j = 0; j <= list[k][i].length - 1; j++) {
                str1 += `<td>${list[k][i][j]}</td>`;
            }
            if (Theta[k]) {
                if (Theta[k][i] == 10000000) {
                    str1 += `<td>-</td>`;
                } else {
                    str1 += `<td>${Theta[k][i]}</td>`;
                }
            }
            str1 += '</tr>';
        }

        str1 += '</tr>';
        str1 += '<tr>';
        str1 += '<td colspan="3">Cj-Zj</td>';
        for (var o = 0; o <= check[k].length - 1; o++) {
            str1 += `<td>${check[k][o]}</td>`;
            str1 += '<br>';
        }
        str1 += '</tr>';
    }
    contain.innerHTML = str1;
    //结果计算
    var b_last = b[b.length - 1];
    var Cb_last = Cb[Cb.length - 1];
    var Xb_last = Xb[Xb.length - 1];
    var max_x = "";
    var max_z = 0;
    for (var i = 0; i < b_last.length; i++) {
        max_z += b_last[i] * Cb_last[i];
    }
    for (var j = 0; j < Xb_last.length; j++) {
        max_x += "x" + Xb_last[j] + "=" + b_last[j] + ";";
    }
    var result = "x的取值为:" + max_x + "<br>最大值z=" + max_z;
    document.getElementById('result').innerHTML = result;
}