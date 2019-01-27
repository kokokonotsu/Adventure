//importScripts("node_modules/pegjs/lib/peg.js");
//const parser = PEG.generate("start = ('look' / 'open' / 'attack' / 'talk' / 'take' / 'unlock' / 'grab' / 'push' / 'put' / 'save' / 'load'/ 'search' / 'examine' / 'move' / 'go' / 'leave'), joining = ('run' / 'at' / 'to' / 'through' / 'in'), +");
const character = {
    name: "Protagonist",
    equipped: {
        hands: { is_full: false, currently_equipped: "", },
        head: {is_full: false, currently_equipped: "", },
        arms: {is_full: false, currently_equipped: "", },
        torso: {is_full: false, currently_equipped: "", },
        legs: {is_full: false, currently_equipped: "", },
        feet: {is_full: false, currently_equipped: "", },
    },
    hands_free: true,
    encumbered: false,
    has_bag: false,
    item_in_hand: {
        right: null,
        left: null,
    },
    stats: {
        health: {
            element: document.getElementById("health"),
            value: 100
        },
        defense: {
            element: document.getElementById("defense"),
            value: 0
        },
        magic: {
            element: document.getElementById("magic"),
            value: 0
        },
        money: {
            element: document.getElementById("money"),
            value: 10
        }
    },
    character_profile:{
        character_profile_element: document.getElementById("character-profile"),
        character_profile_image: "assets/character/Text-Adventure Hero Profile.svg"
    },
    display_stats: function(){
        this.stats.health.element.innerText = character.stats.health.value;
        this.stats.defense.element.innerText = character.stats.defense.value;
        this.stats.magic.element.innerHTML = character.stats.magic.value;
        this.stats.money.element.innerHTML = character.stats.money.value;
    },
    display_character_profile: function(character_image){
        this.character_profile.character_profile_element.setAttribute("data", character_image);
    }
};
const locations = {
    current_location: "",
    current_room: "room",
    home: {
        my_room: { name:"my room", visited: true,
            minimap_image: {
                door_closed_with_pillow_quilt_blanket: 
                    "assets/home/my_bedroom/door_closed_with_pillow_quilt_blanket.svg",
                door_closed_with_pillow_blanket: 
                    "assets/home/my_bedroom/door_closed_with_pillow_blanket.svg",
                door_closed_with_quilt_blanket: 
                    "assets/home/my_bedroom/door_closed_with_quilt_blanket.svg",
                door_closed_with_pillow_quilt: 
                    "assets/home/my_bedroom/door_closed_with_pillow_quilt.svg",
                door_closed_with_blanket:
                    "assets/home/my_bedroom/door_closed_with_blanket.svg",
                door_closed_with_pillow:
                    "assets/home/my_bedroom/door_closed_with_pillow.svg",
                door_closed_with_quilt:
                    "assets/home/my_bedroom/door_closed_with_quilt.svg",
                door_closed:
                    "assets/home/my_bedroom/door_closed_with_quilt.svg",
                door_open_with_pillow_quilt_blanket:
                    "assets/home/my_bedroom/door_open_with_pillow_quilt_blanket.svg",
                door_open_with_quilt_blanket:
                    "assets/home/my_bedroom/door_open_with_quilt_blanket.svg",
                door_open_with_pillow_blanket:
                    "assets/home/my_bedroom/door_open_with_pillow_blanket.svg",
                door_open_with_pillow_quilt:
                    "assets/home/my_bedroom/door_open_with_pillow_quilt.svg",
                door_open_with_blanket:
                    "assets/home/my_bedroom/door_open_with_blanket.svg",
                door_open_with_pillow:
                    "assets/home/my_bedroom/door_open_with_pillow.svg",
                door_open_with_quilt: 
                    "assets/home/my_bedroom/door_open_with_quilt.svg",
                door_open:
                    "assets/home/my_bedroom/door_open.svg"
            },
        },
        bedroom_hallway: { name: "bedroom hallway", visited: false, 
            minimap_image: {
                default: 
                    "assets/home/bedroom_hallway/default.svg"
            }
        },
        kitchen: { name: "kitchen", visited: false },
        living_room: { name: "living_room", visited: false,
        minimap_image: {
                default:
                    "assets/home/living_room/living_room_default.svg"
            }
        },
        courtyard: { name: "courtyard", visited: false },
        servants_quarters: { name: `servant's quarters`, visited: false },
    },
    set_current_location: function(new_location){
        this.current_location = new_location;
    },
}
const minimap = {
    minimap: document.getElementById("minimap-container"),
    minimap_svg: null,
    draw_minimap: function(minimap_image){
        this.minimap.setAttribute("data", minimap_image);
    }
}
const descriptions =  {
    description_element: document.getElementById("scene-description"),
    look_description: {
        home: {
            my_room: {
                look: `You are in a room about 15' by 10', with a queen sized bed in the corner.<br>
                There is a window to the <b>east</b> by the bed, large enough for you to climb through if need be, but you don't see a reason for doing that.<br>
                There is a door fixed in the wall opposite the window, to the <b>west</b>.<br> 
                There are two book selves in the room lining the wall to the right of the door.<br>`,
                bed: "It is a queen sized bed, quite large for one person. There are bed sheets, quilts, blankets, and two pillows on the bed. The frame is made of finished oak.<br>",
                window: "It is a rather large window, large enough for you to climb through if need be, but you don't see a reason for doing that.<br>",
                door_unlocked_closed: "It is a wooden door, of the finest quality.<br> The arch of the door allows for enough space for two of you to fit through side by side, and about two heads taller than you are.<br> Upon further inspection, the door seems to be unlocked on the inside, your side.<br> Everything seems good to go, door ready for doing what doors do best.<br> Sitting there waiting to be opened.<br>",
                door_locked_closed: "It is a wooden door, of the finest quality.<br> The arch of the door allows for enough space for two of you to fit through side by side, and about two heads taller than you are.<br> The door is closed.<br> Upon further inspection, the door seems to be locked on the inside, your side.<br> Hopefully you didn't try opening the door before unlocking it.<br> That would be embarrassing...<br>",
                door_unlocked_opened: "It is a wooden door, of the finest quality.<br> The arch of the door allows for enough space for two of you to fit through side by side, and about two heads taller than you are.<br> Upon further inspection, the door seems to be unlocked on the inside, your side.<br> Everything seems good to go, the door is open, just head on through.<br>",
                door_closed_message: "Where are you trying to go? The door is closed!<br>",
                items: {
                    pillow: "It's the pillow from your bed, <i>pretty soft</i>.<br> Hope that's drool on there.<br>",
                    quilt: "It's an elaborate quilt, of the <i>finest</i> quality.<br> You can tell that there has been some love put into this quilt.<br>",
                    blanket: "This is one of the blankets from your bed.<br> Still warm.<br> Nice.<br>"
                }
            },
            bedroom_hallway:{
                look: "You are in a hallway connecting your room with a series of other rooms.<br> There are several doors, one across the way from your room to the <b>west</b>, and one at either end of the hall, <b>north</b> and <b>south</b> respectively.<br> Your room is to the <b>east</b>.<br>"
            },
            living_room:{
                look: "You are standing in a rather large space, much larger than your room. This is the living room. There is a fireplace set within the wall to the <b>east</b>, an archway leading towards the smell of food to the <b>west</b>, and a hallway to the <b>south</b>.<br>",
                items:{
                    bag: "You can put stuff in here!<br>"
                }
            }
        }
    },
    action_description: {
        hands_free:{
            hands_full: "<br>You can't do that, your hands are full!<br>"
        },
        bag_commands:{
            put_in: function(item_name, item_in_bag_relation){
                if(item_in_bag_relation == false){
                    var description_message = "You put " + item_name + " into the bag.";
                    typeWriter(description_message, true);
                    item_in_bag_relation = true;
                } else {
                    typeWriter("That item's already in the bag!");
                }
            },
            take_out: function(item_name, item_in_bag_relation){
                if(item_in_bag_relation == true){
                    var description_message = "You take " + item_name + " out of the bag.";
                    typeWriter(description_message, true);
                    item_in_bag_relation = false;
                } else {
                    typeWriter("That item's not in the bag!", true);
                }
            }
        },
        home:{
            my_room:{
                open:{
                    door_locked: "<br>You try to open the door by turning knob and pulling.<br> It won't budge an inch.<br>",
                    door_unlocked: "<br>You try to open the door by turning the knob and pulling.<br> It swings open easily.<br>"
                },
                unlock:{
                    unlock_door: "You hear a click as you turn the lock to unlock the door."
                },
                take:{
                    pillow: "You take one of the pillows from your bed.<br>",
                    blanket: "You can't take that when you don't have anything to put it in.<br>",
                    quilt: "You can't take that when you don't have anything to put it in.<br>",
                    bag:{
                        blanket: "You put one of the blankets from your bed into you bag.<br>",
                        quilt: "You put the quilt from your bed into you bag.<br>"
                    }
                }
            },
            living_room:{
                open:{
                    door_locked: "You try to open the door by turning knob and pulling.<br> It won't budge an inch.<br>",
                    door_unlocked: "You try to open the door by turning knob and pulling.<br> It swings open easily.<br>"
                },
                unlock:{
                    unlock_door: "You hear a click as you turn the lock to unlock the door.<br>"
                },
                take:{
                    bag: "You take take the bag.<br>",
                    chair: "You pick up the chair, it's still fairly easy to move around.<br>"
                },
                sit:{
                    chair: "You sit down on the chair.<br> It's moderately comfortable.<br>"
                },
                grab:{
                    chair: "You pick up the chair, it's still fairly easy to move around.<br>"
                },
                pick_up:{
                    chair: "You pick up the chair, it's still fairly easy to move around.<br>"
                }
            }
        }
    }
};
const story_dialogue = {
    home: {
        start: 
        `As the sunlight from mid-morning peeks over the mountains and through the window, your eyes open.<br>
        You are lying on a bed in a decently sized room.<br>
        This is your home.<br>
        You fell asleep last night after putting your younger siblings to bed, and now you awaken from your sleep, just the same as every other day.<br>
        Time to get to work.`
    }
};
const scenes = {
    scene: {
        home: {
            my_room:{
                look: descriptions.look_description.home.my_room.look,
                bed: { name: "bed", svg: null },
                door: { name: "door", cardinal_direction: "west", svg: null },
                window: { name: "window", cardinal_direction: "east", svg: null},
                door_unlocked: false,
                door_open: false,
                items:{
                    pillow: { name: "pillow", svg: null },
                    quilt: { name: "quilt", svg: null },
                    blanket: { name: "blanket", svg: null },
                },
            },
            kitchen:{
                look: descriptions.look_description.home.kitchen
            },
            bedroom_hallway:{
                look: descriptions.look_description.home.bedroom_hallway.look,
                my_bedroom_door: { name: "my bedroom door", cardinal_direction: "east" },
                living_room_door: {name: "living room door", cardinal_direction: "south" },
            },
            living_room:{
                look: descriptions.look_description.home.living_room.look,
                bedroom_hallway_door: { name: "bedroom hallway door", cardinal_direction: "north" },
                kitchen_door: { name: "kitchen door", cardinal_direction: "east" },
                outside_door: { name: "outside door", cardinal_direction: "west" },
                fireplace: { name: "fireplace", svg: null },
            }
        }
    },
};
const commands = {
    look: {name: "look"},
    open: "open",
    attack: "attack",
    talk: "talk",
    take: "take",
    unlock: "unlock",
    grab: "grab",
    push: "push",
    put: {
        name: "put"
    },
    save: {
        name: "save"
    },
    load:{
        name: "load"
    },
    investigation:{
        search: "search",
        examine: "examine"
    },
    movement: {
        move: "move",
        go:"go",
        leave: "leave",
        run: "run"
    },
    joining: {
        at: "at",
        to: "to",
        through: "through",
        in: "in"
    },
    open_door:{
        my_bedroom_door: function(minimap_image){
            typeWriter(descriptions.action_description.home.my_room.open.door_unlocked, true);
            scenes.scene.home.my_room.door.door_open = true;
            minimap.draw_minimap(minimap_image);
        }
    }
};
const inventory = {
    inventory_list: document.getElementById("inventory"),
    pillow: {
        name: "pillow",
        taken: false,
        in_bag: false,
        in_hand: false,
        description: descriptions.look_description.home.my_room.items.pillow
    },
    blanket:{
        name: "blanket",
        taken: false,
        in_bag: false,
        in_hand: false,
        description: descriptions.look_description.home.my_room.items.blanket
    },
    quilt:{
        name: "quilt",
        taken: false,
        in_bag: false,
        in_hand: false,
        description: descriptions.look_description.home.my_room.items.quilt
    },
    bag:{
        name: "bag",
        taken: false,
        in_hand: false,
        description: descriptions.look_description.home.living_room.items.bag,
        bag_inventory:{
            items: []
        },
    },
    current_inventory:{
        pillow: false,
        blanket: false,
        quilt: false,
        bag: false
    },
    commands:{
        take_item: function take_item(item_name){
            var minimap_svg = document.getElementById("minimap-container");
            console.log(minimap_svg);
            var minimap_svg_get = minimap_svg.contentDocument;
            console.log(minimap_svg_get);
            var minimap_document = minimap_svg_get.getElementById("minimap");
            console.log(minimap_document);
            console.log(minimap_document.children);
            for(let i = 0; i < minimap_document.children.length; i++){
                if(minimap_document.children[i].id == "pillows"){
                    var pillows = minimap_document.getElementById("pillows");
                    console.log("pillows found.");
                    for(let i = 0; i < pillows.children.length; i++){
                        if(pillows.children[i].id == "pillow-1"){
                            var pillow_1 = minimap_document.getElementById("pillow-1");
                            console.log("pillow-1 found.");
                            if(item_name == inventory.pillow.name){
                                pillow_1.style.opacity = "0";
                            };
                        }
                        else if(pillows.children[i].id == "pillow-2"){
                            var pillow_2 = minimap_document.getElementById("pillow-2");
                            console.log("pillow-2 found.");
                        }
                    };
                } else if(minimap_document.children[i].id == "quilt"){
                    var quilt = minimap_document.getElementById("quilt");
                    console.log("quilt found.");
                    if(item_name == inventory.quilt.name){
                        quilt.style.opacity = "0";
                    };
                }
                else if(minimap_document.children[i].id == "blanket"){
                    var blanket = minimap_document.getElementById("blanket");
                    //Debug
                    console.log("blanket found.");
                    if(item_name == inventory.blanket.name){
                        blanket.style.opacity = "0";
                    }
                }
            };
        },
        in_bag_check(item_name){
            var in_bag_status;
            if(item_name == inventory.pillow.name){
                in_bag_status == inventory.pillow.in_bag;
                return in_bag_status;
            } else if(item_name == inventory.quilt.name){
                in_bag_status == inventory.quilt.in_bag;
                return in_bag_status;
            } else if(item_name == inventory.blanket.name){
                in_bag_status == inventory.blanket.in_bag;
                return in_bag_status;
            }
        },
        left_hand_take: function(item_name){
            descriptions.description_element += "You pick up " + item_name + " with your left hand.<br>";
            character.item_in_hand.left = item_name;
            // Debug
            console.log(character.item_in_hand.left + " in left hand.");
        },
        right_hand_take: function(item_name){
            descriptions.description_element += "You pick up " + item_name + " with your right hand.<br>";
            character.item_in_hand.right = item_name;
            // Debug
            console.log(character.item_in_hand.right + " in right hand.");
        },
        drop_item: function drop_item(item_name){
            var minimap_svg = document.getElementById("minimap-container");
            console.log(minimap_svg);
            var minimap_svg_get = minimap_svg.contentDocument;
            console.log(minimap_svg_get);
            var minimap_document = minimap_svg_get.getElementById("minimap");
            console.log(minimap_document);
            console.log(minimap_document.children);
            for(let i = 0; i < minimap_document.children.length; i++){
                if(minimap_document.children[i].id == "pillows"){
                    var pillows = minimap_document.getElementById("pillows");
                    console.log("pillows found.");
                    for(let i = 0; i < pillows.children.length; i++){
                        if(pillows.children[i].id == "pillow-1"){
                            var pillow_1 = minimap_document.getElementById("pillow-1");
                            console.log("pillow-1 found.");
                            if(item_name == inventory.pillow.name){
                                pillow_1.style.opacity = "1";
                            };
                        }
                        else if(pillows.children[i].id == "pillow-2"){
                            var pillow_2 = minimap_document.getElementById("pillow-2");
                            console.log("pillow-2 found.");
                        }
                    };
                } else if(minimap_document.children[i].id == "quilt"){
                    var quilt = minimap_document.getElementById("quilt");
                    console.log("quilt found.");
                    if(item_name == inventory.quilt.name){
                        quilt.style.opacity = "1";
                    };
                }
            };
        },
        create_inventory_item: function(item_name){
            let newItem = document.createElement("li");
            let newNode = document.createTextNode(item_name);
            newItem.appendChild(newNode);
            inventory.inventory_list.appendChild(newItem);
        },
        take_pillow: function(/*minimap_image*/){
            //minimap.draw_minimap(minimap_image);
            if(inventory.pillow.taken == false){
                if(character.item_in_hand.right == null)
                {
                    inventory.commands.right_hand_take(inventory.pillow.name);
                    typeWriter(descriptions.action_description.home.my_room.take.pillow, true);
                    this.take_item(inventory.pillow.name);
                    let item_name = capitalize(inventory.pillow.name);
                    this.create_inventory_item(item_name);
                    inventory.pillow.taken = true;

                } else if (character.item_in_hand.left == null && character.item_in_hand.right != null){
                    inventory.commands.left_hand_take(inventory.pillow.name);
                    typeWriter(descriptions.action_description.home.my_room.take.pillow, true);
                    this.take_item(inventory.pillow.name);
                    let item_name = capitalize(inventory.pillow.name);
                    this.create_inventory_item(item_name);
                    character.hands_free = false;
                    inventory.pillow.taken = true;
                }
                // Debug
                console.log("I am running");
                console.log("pillow taken: " + inventory.pillow.taken + " quilt taken: " + inventory.quilt.taken + " blanket taken: " + inventory.blanket.taken);
                // Debug
            }
        },
        take_blanket: function(/*minimap_image*/){
            //minimap.draw_minimap(minimap_image);
            if(inventory.blanket.taken == false){
                typeWriter(descriptions.action_description.home.my_room.take.blanket, true);
                this.take_item(inventory.blanket.name);
                if(character.item_in_hand.right == null)
                {
                    inventory.commands.right_hand_take(inventory.blanket.name);
                } else if (character.item_in_hand.left == null && character.item_in_hand.right != null){
                    inventory.commands.left_hand_take(inventory.blanket.name);
                    character.hands_free = false;
                }
                let item_name = capitalize(inventory.blanket.name);
                this.create_inventory_item(item_name);
                inventory.blanket.taken = true;
                // Debug
                console.log("I am running");
                console.log("pillow taken: " + inventory.pillow.taken + " quilt taken: " + inventory.quilt.taken + " blanket taken: " + inventory.blanket.taken);
                // Debug
            }
        },
        take_quilt: function(/*minimap_image*/){
            //minimap.draw_minimap(minimap_image);
            if(inventory.quilt.taken == false){
                typeWriter(descriptions.action_description.home.my_room.take.quilt, true);
                this.take_item(inventory.quilt.name);
                if(character.item_in_hand.right == null)
                {
                    inventory.commands.right_hand_take(inventory.quilt.name);
                } else if (character.item_in_hand.left == null && character.item_in_hand.right != null){
                    inventory.commands.left_hand_take(inventory.quilt.name);
                    character.hands_free = false;
                }
                let item_name = capitalize(inventory.quilt.name);
                this.create_inventory_item(item_name);
                inventory.quilt.taken = true;
                // Debug
                console.log("I am running");
                console.log("pillow taken: " + inventory.pillow.taken + " quilt taken: " + inventory.quilt.taken + " blanket taken: " + inventory.blanket.taken);
                // Debug
            }
        },
        take_bag: function(){
            this.take_item(inventory.bag.name);
        },
        put_in_bag: function(item_name){
            for(let i = 0; i < inventory.bag.bag_inventory.items.length; i++){
                if(inventory.bag.bag_inventory.items[i] == item_name
                    && character.item_in_hand.right == item_name){
                        console.log("right hand free.");
                        character.item_in_hand.right = null;
                        inventory.bag.bag_inventory.items.push(item_name);
                        descriptions.action_description.bag_commands.put_in(item_name, inventory.commands.in_bag_check(item_name));
                } else if (inventory.bag.bag_inventory.items[i] == item_name
                    && character.item_in_hand.left == item_name){
                        console.log("left hand free.");
                        character.item_in_hand.left = null;
                        inventory.bag.bag_inventory.items.push(item_name);
                        descriptions.action_description.bag_commands.put_in(item_name, inventory.commands.in_bag_check(item_name));
                }
                else if(character.item_in_hand.right != null && character.item_in_hand.left != null){
                    typeWriter("You have nothing in your hands to put away!", true);
                }
            }
        }
    }
};
function checkInput(){
    var text_input = document.getElementById("text-input");
    var text_input_lowercase = text_input.value.toLowerCase();
    var input = text_input_lowercase.split(" ");
    var description = document.getElementById("scene-description");
    var command_history = document.getElementById("command-history-container");
    switch(input[0]){
        case commands.look.name:{
        switch(locations.current_location){
            case locations.home.my_room:{
                description.innerHTML = "";
                switch(input[1]){
                    case commands.joining.at:{
                        //Debug
                        //console.log(input[1]);
                        if(input[2] == scenes.scene.home.my_room.bed.name){
                            //Debug
                            //console.log(input[2]);
                            typeWriter(descriptions.look_description.home.my_room.bed, true);
                            break;
                        } else if (input[2] == scenes.scene.home.my_room.door.name && scenes.scene.home.my_room.door.name){
                            if(scenes.scene.home.my_room.door.name_unlocked == false && scenes.scene.home.my_room.door.name_open == false){
                                typeWriter(descriptions.look_description.home.my_room.door_locked_closed, true);
                            } else if (scenes.scene.home.my_room.door.name_unlocked == true && scenes.scene.home.my_room.door.name_open == false){
                                typeWriter(descriptions.look_description.home.my_room.door_unlocked_closed, true);
                            } else if (scenes.scene.home.my_room.door.name_unlocked == true && scenes.scene.home.my_room.door.name_open == true){
                                typeWriter(descriptions.look_description.home.my_room.door_unlocked_opened, true);
                            }
                            break;
                        } else if(input[2] == scenes.scene.home.my_room.window.name){
                            typeWriter(descriptions.look_description.home.my_room.window, true);
                            break;
                        } else {
                            typeWriter("Nothing to look at.", true);
                            //Debug
                            //console.log(input[2]);
                            break;
                        }
                    }
                    case locations.current_room:{
                        typeWriter(descriptions.look_description.home.my_room.look, true);
                        break;
                    }
                    case scenes.scene.home.my_room.window.name:{
                        typeWriter(descriptions.look_description.home.my_room.window, true);
                        break;
                    }
                    case scenes.scene.home.my_room.window.cardinal_direction:{
                        typeWriter(descriptions.look_description.home.my_room.window, true);
                        break;
                    }
                    case scenes.scene.home.my_room.bed.name:{
                        typeWriter(descriptions.look_description.home.my_room.bed, true);
                        break;
                    }
                    case scenes.scene.home.my_room.door.name:{
                        if(scenes.scene.home.my_room.door_unlocked == false){
                            typeWriter(descriptions.look_description.home.my_room.door_locked_closed, true);
                        } else if (scenes.scene.home.my_room.door_unlocked == true && scenes.scene.home.my_room.door_open == false){
                            typeWriter(descriptions.look_description.home.my_room.door_unlocked_closed, true);
                        } else if (scenes.scene.home.my_room.door_unlocked == true && scenes.scene.home.my_room.door_open == true){
                            typeWriter(descriptions.look_description.home.my_room.door_unlocked_opened, true);
                        }
                        break;
                    }
                    case scenes.scene.home.my_room.door.cardinal_direction:{
                        if(scenes.scene.home.my_room.door_unlocked == false){
                            typeWriter(descriptions.look_description.home.my_room.door_locked_closed, true);
                        } else if (scenes.scene.home.my_room.door_unlocked == true){
                            typeWriter(descriptions.look_description.home.my_room.door_unlocked_closed, true);
                        }
                        break;
                    }
                    default:{
                        typeWriter("Look at what?", true);
                    }
                }
                break;
            }
            case locations.home.bedroom_hallway:{
                description.innerHTML = "";
                switch(input[1]){
                    case locations.current_room:{
                        typeWriter(descriptions.look_description.home.bedroom_hallway.look, true);
                        break;
                    }
                    default:{
                        typeWriter("Look where?", true);
                    }
                }
                break;
            }
            case locations.home.living_room:{
                description.innerHTML = "";
                switch(input[1]){
                    case locations.current_room:{
                        typeWriter(descriptions.look_description.home.living_room.look, true);
                        break;
                    }
                    default:{
                        typeWriter("Look where?", true);
                    }
                }
                break;
            }
            case locations.home.kitchen:{
                break;
            }
        }
        break;
        };
        case commands.open:{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.door.name:{
                            // if(character.hands_free == false){description.innerHTML += descriptions.action_description.hands_free.hands_full;}
                            // else 
                            if(scenes.scene.home.my_room.door_unlocked == false)
                            {
                                typeWriter(descriptions.action_description.home.my_room.open.door_locked, true);
                            }
                            else if(scenes.scene.home.my_room.door_unlocked == true)
                            {
                                typeWriter(descriptions.action_description.home.my_room.open.door_unlocked, true);
                            }
                            break;
                        };
                        default:{
                            typeWriter("Open what?", true);
                        };
                    };
                    break;
                }
            };
            break;
        };
        case commands.take:{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.items.pillow.name:{
                            if(inventory.pillow.taken == false && character.hands_free == true)
                            { inventory.commands.take_pillow(); }
                            else if(inventory.pillow.taken == false && character.hands_free == false)
                            { typeWriter("You already have something in your hands!", true); }
                            else if(inventory.pillow.taken == true)
                            { typeWriter("You've already taken this item.", true); };
                            break;
                        }
                        case scenes.scene.home.my_room.items.quilt.name:{
                            if(inventory.quilt.taken == false && character.hands_free == true)
                            { inventory.commands.take_quilt(); }
                            else if(inventory.quilt.taken == false && character.hands_free == false)
                            { typeWriter("You already have something in your hands!", true); }
                            else if(inventory.quilt.taken == true)
                            { typeWriter("You've already taken this item.", true); };
                            break;
                        }
                        case scenes.scene.home.my_room.items.blanket.name:{
                            if(inventory.blanket.taken == false && character.hands_free == true)
                            { inventory.commands.take_blanket(); }
                            else if(inventory.blanket.taken == false && character.hands_free == false)
                            { typeWriter("You already have something in your hands!", true); }
                            else if(inventory.blanket.taken == true)
                            { typeWriter("You've already taken this item.<br>", true); };
                            break;
                        }
                        default:{
                            typeWriter("There's nothing there to take.", true);
                        }
                    }
                }
            }
            break;
        }
        case commands.unlock:{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.door.name:{
                            typeWriter(descriptions.action_description.home.my_room.unlock.unlock_door, true);
                            scenes.scene.home.my_room.door_unlocked = true;
                            break;
                        }
                        default:{
                            typeWriter("Unlock what?", true);
                        }
                    }
                    break;
                }
            }
        break;
        }
        case commands.movement.go:{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.door.name:{
                            if(scenes.scene.home.my_room.door.name_open == true){
                                locations.set_current_location(locations.home.bedroom_hallway);
                                if(locations.home.bedroom_hallway.visited == false){ locations.home.bedroom_hallway.visited = true; };
                                typeWriter(descriptions.look_description.home.bedroom_hallway.look, true);
                                minimap.draw_minimap(locations.home.bedroom_hallway.minimap_image.default);
                                console.log("Hallway visited: " + locations.home.bedroom_hallway.visited);
                            } else if (scenes.scene.home.my_room.door.name_open == false){
                                typeWriter(descriptions.look_description.home.my_room.door_closed_message, true);
                            }
                            break;
                        }
                        case scenes.scene.home.my_room.door.cardinal_direction:{
                            if(scenes.scene.home.my_room.door.name_open == true){
                                locations.set_current_location(locations.home.bedroom_hallway);
                                if(locations.home.bedroom_hallway.visited == false){ locations.home.bedroom_hallway.visited = true; };
                                typeWriter(descriptions.look_description.home.bedroom_hallway.look, true);
                                minimap.draw_minimap(locations.home.bedroom_hallway.minimap_image.default);
                                console.log("Hallway visited: " + locations.home.bedroom_hallway.visited);
                            } else if (scenes.scene.home.my_room.door.name_open == false){
                                typeWriter(descriptions.look_description.home.my_room.door_closed_message, true);
                                console.log("I am running");
                            }
                            break;
                        }
                        default:{
                            typeWriter("Go where?", true);
                        }
                    }
                    break;
                }
                case locations.home.bedroom_hallway:{
                    switch(input[1]){
                        case scenes.scene.home.bedroom_hallway.my_bedroom_door.cardinal_direction:{
                            locations.set_current_location(locations.home.my_room);
                            if(inventory.pillow.taken == false && inventory.blanket.taken == false && inventory.quilt.taken == false){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_pillow_quilt_blanket);
                                console.log("Current location is: " + locations.current_location);
                            } else if(inventory.pillow.taken == false && inventory.blanket.taken == true && inventory.quilt.taken == false){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_pillow_quilt);
                                console.log("Current location is: " + locations.current_location);
                            } else if(inventory.pillow.taken == true && inventory.blanket.taken == true && inventory.quilt.taken == false){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_quilt);
                                console.log("Current location is: " + locations.current_location);
                            } else if(inventory.pillow.taken == true && inventory.blanket.taken == false && inventory.quilt.taken == false){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_quilt_blanket);
                                console.log("Current location is: " + locations.current_location);
                            } else if(inventory.pillow.taken == true && inventory.blanket.taken == false && inventory.quilt.taken == true){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_blanket);
                                console.log("Current location is: " + locations.current_location);
                            } else if(inventory.pillow.taken == false && inventory.blanket.taken == false && inventory.quilt.taken == true){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_pillow_blanket);
                                console.log("Current location is: " + locations.current_location);
                            } else if(inventory.pillow.taken == false && inventory.blanket.taken == true && inventory.quilt.taken == true){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_pillow);
                                console.log("Current location is: " + locations.current_location);
                            } else if(inventory.pillow.taken == true && inventory.blanket.taken == true && inventory.quilt.taken == true){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open);
                                console.log("Current location is: " + locations.current_location);
                            }
                            break;
                        }
                        case scenes.scene.home.bedroom_hallway.living_room_door.cardinal_direction:{
                            locations.set_current_location(locations.home.living_room);
                            minimap.draw_minimap(locations.home.living_room.minimap_image.default);
                            console.log("Current location is: " + locations.current_location);
                            break;
                        }
                    }
                    break;
                }
                case locations.home.living_room:{
                    switch(input[1]){
                        case scenes.scene.home.living_room.bedroom_hallway_door.cardinal_direction:{
                            locations.set_current_location(locations.home.bedroom_hallway);
                            minimap.draw_minimap(locations.home.bedroom_hallway.minimap_image.default);
                            console.log("Current location is: " + locations.current_location);
                            break;
                        }
                    }
                    break;
                }
            }
            break;
        }
        case commands.put.name:{
            if(inventory.bag.taken == true){
                if(input[1] == inventory.pillow.name){
                    if(input[2] == commands.joining.in){
                        if(input[3] == inventory.bag.name){
                            inventory.commands.put_in_bag(inventory.pillow.name);
                        } else {
                            typeWriter("Put " + inventory.pillow.name + " in what?", true);
                        }
                    } else {
                        typeWriter("Put " + inventory.pillow.name + " where?", true);
                    };
                } else if(input[1] == inventory.quilt.name){
                    if(input[2] == commands.joining.in){
                        if(input[3] == inventory.bag.name){
                            inventory.commands.put_in_bag(inventory.quilt.name);
                        } else {
                            typeWriter("Put " + inventory.quilt.name + " in what?", true);
                        }
                    } else {
                        typeWriter("Put " + inventory.quilt.name + " where?", true);
                    };
                } else if(input[1] == inventory.blanket.name){
                    if(input[2] == commands.joining.in){
                        if(input[3] == inventory.bag.name){
                            inventory.commands.put_in_bag(inventory.blanket.name);
                        } else {
                            typeWriter("Put " + inventory.blanket.name + " in what?", true);
                        }
                    } else {
                        typeWriter("Put " + inventory.blanket.name + " where?", true);
                    };
                }
            } else {
                typeWriter("You need to have a bag first!", true);
            }
            break;
        }
        case commands.save.name:{
            save_game();
            break;
        }
        case commands.load.name:{
            load_game();
            break;
        }
        default:{
            description.innerHTML += input + " is an invalid command<br>";
        }
    };
    function insert_command_history(input){
        //Inserts new span element
        let newLine = document.createElement("span");
        let newLineContent = document.createTextNode(input);
        newLine.appendChild(newLineContent);
        command_history.insertAdjacentElement("beforeend", newLine);
        //Resets Element scroll position to bottom after every input
        command_history.scrollTop = command_history.scrollHeight;
        // Debug
        // console.log("OffsetHeight is: " + command_history.offsetHeight);
        // console.log("clientHeight is: " + command_history.clientHeight);
        // console.log("scrollHeight is: " + command_history.scrollHeight);
        //console.log(command_history.childElementCount);
        if(command_history.childElementCount > 20){
            command_history.removeChild(command_history.children[0]);
        };
    };
    insert_command_history(text_input.value);
    text_input.value = "";
};
//Capitalize Function
function capitalize(string){ return string.charAt(0).toUpperCase() + string.slice(1); };
//Get SVG DOM Function
function getSVG(){
    //Get Object containing SVG
    var minimap_svg = document.getElementById("minimap-container");
    //Get DOM of Object
    var minimap_svg_get = minimap_svg.contentDocument;
    //Get SVG ID of Object DOM
    var minimap_document = minimap_svg_get.getElementById("minimap");
    // console.log(minimap_svg);
    // console.log(minimap_svg_get);
    // console.log(minimap_document);
    // console.log(minimap_document.children);
    //Loop through all first level children of Object DOM
    for(let i = 0; i < minimap_document.children.length; i++){
        if(minimap_document.children[i].id == "bed-frame"){
            var bedframe = minimap_document.getElementById("bed-frame");
            // console.log("bedframe found.");
        } else if (minimap_document.children[i].id == "bedroom-door"){
            var bedroom_door = minimap_document.getElementById("bedroom-door");
            // console.log("bedroom door found.");
        } else if(minimap_document.children[i].id == "pillows"){
            var pillows = minimap_document.getElementById("pillows");
            // console.log("pillows found.");
            for(let i = 0; i < pillows.children.length; i++){
                if(pillows.children[i].id == "pillow-1"){
                    var pillow_1 = minimap_document.getElementById("pillow-1");
                    // console.log("pillow-1 found.");
                }
                else if(pillows.children[i].id == "pillow-2"){
                    var pillow_2 = minimap_document.getElementById("pillow-2");
                    // console.log("pillow-2 found.");
                }
            }
        } else if(minimap_document.children[i].id == "quilt"){
            var quilt = minimap_document.getElementById("quilt");
            // console.log("quilt found.");
        }
    };
};
//Onload Function looking for Object Sub-Document DOM
window.onload = function(){
    var minimap_svg = document.getElementById("minimap-container");
    var minimap_svg_get = minimap_svg.contentDocument;
    var minimap_document = minimap_svg_get.getElementById("minimap");
    //console.log(minimap_svg);
    //console.log(minimap_svg_get);
    // console.log(minimap_document);
    // console.log(minimap_document.children);
    for(let i = 0; i < minimap_document.children.length; i++){
        if(minimap_document.children[i].id == "bed-frame"){
            var bedframe = minimap_document.getElementById("bed-frame");
            // console.log("bedframe found.");
        } else if (minimap_document.children[i].id == "bedroom-door"){
            var bedroom_door = minimap_document.getElementById("bedroom-door");
            // console.log("bedroom door found.");
        } else if(minimap_document.children[i].id == "pillows"){
            var pillows = minimap_document.getElementById("pillows");
            // console.log("pillows found.");
            for(let i = 0; i < pillows.children.length; i++){
                if(pillows.children[i].id == "pillow-1"){
                    var pillow_1 = minimap_document.getElementById("pillow-1");
                    // console.log("pillow-1 found.");
                }
                else if(pillows.children[i].id == "pillow-2"){
                    var pillow_2 = minimap_document.getElementById("pillow-2");
                    // console.log("pillow-2 found.");
                }
            }
        } else if(minimap_document.children[i].id == "quilt"){
            var quilt = minimap_document.getElementById("quilt");
            // console.log("quilt found.");
        }
    };
    typeWriter(story_dialogue.home.start, true);
};
//Load in content on Window Load Function
function load_document (){
    character.display_stats();
    character.display_character_profile(character.character_profile.character_profile_image);
    minimap.draw_minimap(locations.home.my_room.minimap_image.door_closed_with_pillow_quilt_blanket);
    locations.current_location = locations.home.my_room;
};
const scene_description_container = document.getElementById("scene-description-container");
var document_width;
function scene_description_container_width(){
    document_width = document.body.clientWidth;
    var scene_description_container_width_variable = document_width - 312;
    scene_description_container.style.width = scene_description_container_width_variable + "px";
    console.log(document_width);
    console.log(scene_description_container_width_variable);
};
function typeWriter(message, restart){
    var i = 0; //Initialize the counter variable for typeWriterStart
    var j = 0; //Initialize the counter variable for message_split
    var newNode = document.createElement("span");
    var blinking_cursor = document.createElement("span");
    var cursor = document.createTextNode("|");
    blinking_cursor.id = "blinking-cursor";
    blinking_cursor.appendChild(cursor);
    if(restart == true){
        while(descriptions.description_element.firstChild){
            descriptions.description_element.removeChild(descriptions.description_element.firstChild);
        }
        descriptions.description_element.appendChild(newNode);
        descriptions.description_element.appendChild(blinking_cursor);
        blinking_cursor.style.visibility = "visible";
    };
    var message_split = message.split("<br>");
    // Debug
    // console.log(message);
    // Debug
    // console.log(message_split);
    checkRestart();
    function typeWriterStart(text){
        var speed = 50; /* The speed/duration of the effect in milliseconds */
        if (text[j] == undefined){  blinking_cursor.style.visibility = "hidden"; return };
        if (j <= text.length){
            if(i < text[j].length){
                newNode.innerHTML += text[j].charAt(i); //Point to the character in the string at position 'i'
                i++; //Increment 'i' to pass the pointer in the string to the next character
                setTimeout(() => { return typeWriterStart(text) }, speed); //Restart Function to place next character in 'text'
            } else if (i >= text[j].length){
                let lineBreak = document.createElement("br");
                newNode.insertAdjacentElement("beforeend", lineBreak);
                i = 0; //Reset typing counter for next line
                j++; //Increment Index position of message_split
                setTimeout(() => { return typeWriterStart(text) }, speed); //Restart Function to place next character in 'text'
            };
        };
    };
    function checkRestart(){
        if(restart == true){
            i = 0;
            j = 0;
            descriptions.description_element.innerHTML == "";
            return typeWriterStart(message_split);
        } else {
            return;
        }
    };
};
function change_svg(){
    console.log(subdoc);
};
function save_game(){
    if(inventory.pillow.taken == true){
        for(i in inventory.pillow){
            if(inventory.pillow[i] == inventory.pillow.in_hand)
            {save.inventory.pillow.in_hand = inventory.pillow[i];};
            if(inventory.pillow[i] == inventory.pillow.in_bag)
            {save.inventory.pillow.in_bag = inventory.pillow[i];};
        };
    };
    if(inventory.blanket.taken == true){
        for(i in inventory.blanket){
            if(inventory.blanket[i] == inventory.blanket.in_hand)
            {save.inventory.blanket.in_hand = inventory.blanket[i];};
            if(inventory.blanket[i] == inventory.blanket.in_bag)
            {save.inventory.blanket.in_bag = inventory.blanket[i];};
        };
    };
    if(inventory.quilt.taken == true){
        for(i in inventory.quilt){
            if(inventory.quilt[i] == inventory.quilt.in_hand)
            {save.inventory.quilt.in_hand = inventory.quilt[i];};
            if(inventory.quilt[i] == inventory.quilt.in_bag)
            {save.inventory.quilt.in_bag = inventory.quilt[i];};
        };
    };
    if(inventory.bag.taken == true){
        for(i in inventory.bag){
            if(inventory.bag[i] == inventory.bag.in_hand)
            {save.inventory.bag.in_hand = inventory.bag[i];};
        };
    };
    var save = {
        character: character.name,
        current_location: locations.current_location,
        inventory: {
            pillow: {in_bag: false, in_hand: false},
            blanket: {in_bag: false, in_hand: false},
            quilt: {in_bag: false, in_hand: false},
            bag: {in_hand: false}
        }
    };
    localStorage.setItem("save", JSON.stringify(save));
};
function load_game(){
    var game_save = JSON.parse(localStorage.getItem("save"));

    if(game_save != null && game_save != undefined){
        character.name = game_save.character;
        inventory.bag.in_hand = save.inventory.bag.in_hand;
        inventory.blanket.in_hand = save.inventory.blanket.in_hand;
        inventory.blanket.in_bag = save.inventory.blanket.in_bag;
        inventory.quilt.in_hand = save.inventory.quilt.in_hand;
        inventory.quilt.in_bag = save.inventory.quilt.in_bag;
        inventory.pillow.in_hand = save.inventory.pillow.in_hand;
        inventory.pillow.in_bag = save.inventory.pillow.in_bag;
    };
};
window.addEventListener("resize", scene_description_container_width);
window.addEventListener("load", scene_description_container_width);
window.addEventListener("load", load_document);
document.getElementById("text-input").addEventListener("keyup", function(e){e.preventDefault(); if(e.keyCode === 13){ checkInput(); }; });
document.getElementById("enter-button").addEventListener("click", checkInput);