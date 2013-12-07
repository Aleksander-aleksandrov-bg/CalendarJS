var Toolbar = (function () {


    var Menu = function (options) {  //class

        _this = this; // kogato izpolzvame this s dolna cherta sochi kym scope na nashiqt model

        this.parent = document.querySelector(options.parent); //vzimame id
        this.items = options.items; // vzimame kopie na masiva s elementi
        this.elements = []; // dopalnitelen masiv, pazi instanciite na nashite itemi
        this.type = options.type;

        this.addElements(this.items,this.type); //dobavqme elementite
        this.render(this.elements); //izobrazqvame elmentite

        this.parent.addEventListener('click', function (e) {

            for (var index = 0; index < _this.parent.children.length; index++) {
                el = _this.parent.children[index];
                el.className = el.className.replace("active", "");
            }
            e.target.className = "active";
        }, false)

    };


    Menu.prototype.addElements = function (elements,type) {
        if (isArray(elements)) {
            for (var index = 0, len = elements.length; index < len; index += 1) // obrabotavame masiva
            {
                this.elements.push(new Item(elements[index], type)); // vkarvame nov obekt v elements masiva
            }
        }
        else {
            this.elements.push(new Item(elements, type));
        }
    };
    function isArray(object) {
        if (object.constructor === Array) return true;
        else return false;
    }

    Menu.prototype.render = function (elements,type) {

        var builder = "";
        for (var index = 0, len = elements.length; index < len; index += 1) {
            builder += elements[index].render(); // pylnim si buildera sys stoinosti <li>

        }

        this.parent.innerHTML = builder; //izobrazqvame na ekrana
    }; // izobrazqvame na ekrana


    var Item = function (name,type) { //class
        this.name = name;
        this.type = type;
    };


    Item.prototype.render = function () {
        
        return "<" + this.type + ">" + this.name + "</li>"
    }  //vseki pput kato go viknem vrushta HTML ekvivalenta na nashiqt obekt


    return {

        create: function (options) {
            return new Menu(options);
            //console.log("It works"); // testvane dali raboti
        } 								// vryshtame anonimna funkciq s options obekt i vrushta instanciq na obekt MENU
        // revealing model pattern
    }

})(); 									//anonymous function, imeadiately invoking anonymous function


 // podavame obekt pylen s properties