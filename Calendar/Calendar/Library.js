var myLibrary = {

    GetDomElement: function (element) {
        var takenElement = document.querySelectorAll(element);
        for (var i = 0; i < takenElement.length; i++) {
            var el = takenElement[i];
        }
        return el;
    },

    AddElement: function (parrent, element, type, obj) {
        var older = myLibrary.GetDomElement(parrent);
        var builder = "";
        if (myLibrary.isArray(element)) {
            for (var index = 0, len = element.length; index < len; index += 1) // obrabotavame masiva
            {
                builder += myLibrary.Make(element[index], type); // vkarvame nov obekt v elements masiva
            }
        }
        else {
            builder += myLibrary.Make(element, type);
            var el = myLibrary.Make(element, type);
            //el.className = "event";
            if (obj != "undefined") {                
                for (var i in obj) {
                    console.log(i);
                    el[i] = obj[i];
                }
            }
        }
        older.innerHTML += builder;
    },
    isArray: function (object) {
        if (object.constructor === Array) return true;
        else return false;
    },
    Make: function (name, type) {
        return "<" + type + ">" + name + "</" + type + ">"
    },
    RemoveElement: function (element, child) {
        if (child[0] == "#" || child[0] == ".") {
            var child = myLibrary.GetDomElement(child);
            var parenT = myLibrary.GetDomElement(element);
            child.parentNode.removeChild(child);
        }
        else {
            var parenT = myLibrary.GetDomElement(element).childNodes;
            for (var i = 0; i < parenT.length; i++) {
                if (parenT[i].nodeName.toLowerCase() == child) {
                    console.log(parenT[i]);
                    parenT[i].parentNode.removeChild(parenT[i]);
                }
            }
        }
    },

    ManipulateElementAttribute: function (parrent, element, attribute, name) {
        if (element[0] == "#" || element[0] == ".") {
            var elementChange = myLibrary.GetDomElement(element);
            elementChange.setAttribute(attribute, name);
            //change(attribute, elementChangee, name);
        }
        else {
            var elementChange = myLibrary.GetDomElement(parrent).childNodes;
            for (var i = 0; i < elementChange.length; i++) {

                if (elementChange[i].nodeName.toLowerCase() == element) {
                    console.log("yes");
                    elementChange[i].setAttribute(attribute, name);
                    //change(attribute, elementChange[i], name);
                }
            }
        }
    },

    ManipulateElementTextAndHtml: function (element, content) {

        myLibrary.GetDomElement(element).innerHTML = content;
    },

    css: function (selector, property, value) {
        var elem = myLibrary.GetDomElement(selector);
        console.log(elem);
        elem.setAttribute("style", property + ":" + value);
        //}
    }
}