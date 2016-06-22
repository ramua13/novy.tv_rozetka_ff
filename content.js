var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var keywords = [];

            keywords.push('Einhell');
            keywords.push('Samsung');
            keywords.push('Sony');
            keywords.push('Atlant');
            keywords.push('Snaige');
            keywords.push('Nord');
            keywords.push('Indesit');
            keywords.push('Whirlpool');
            keywords.push('Bosch');
            keywords.push('Zanussi');
            keywords.push('Liebherr');
            keywords.push('Vestfrost');
            keywords.push('Gorenje');
            keywords.push('Beko');
            keywords.push('LG');
            keywords.push('Electro');
            keywords.push('lux');
            keywords.push('Intertool');
            keywords.push('Alloid');
            keywords.push('BahcoJuco');
            keywords.push('Mastertool');
            keywords.push('Miol');
            keywords.push('Tools');
            keywords.push('Proline');
            keywords.push('Sigma');
            keywords.push('Stanley');
            keywords.push('Sturm');
            keywords.push('TOPEX');
            keywords.push('Technics');
            keywords.push('СТАЛЬ');
            keywords.push('bahco');
            keywords.push('Juco');

            var re = new RegExp(keywords.join('|'), 'gi')
            var replacedText = text.replace(re, '  ');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}