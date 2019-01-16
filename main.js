
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
        bag_actions:{
            put_in: function(item_name, item_in_bag_relation){
                if(item_in_bag_relation == false){
                    descriptions.description_element.innerHTML += "You put " + item_name + " into the bag.";
                    item_in_bag_relation = true;
                } else {
                    descriptions.description_element.innerHTML += "That item's already in the bag!";
                }
                
            },
            take_out: function(item_name, item_in_bag_relation){
                if(item_in_bag_relation == true){
                    descriptions.description_element.innerHTML += "You take " + item_name + " out of the bag.";
                    item_in_bag_relation = false;
                } else {
                    descriptions.description_element.innerHTML += "That item's not in the bag!";
                }
            }
        },
        home:{
            my_room:{
                open:{
                    door_locked: "You try to open the door by turning knob and pulling.<br> It won't budge an inch.<br>",
                    door_unlocked: "You try to open the door by turning the knob and pulling.<br> It swings open easily.<br>"
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
        Time to get to work.<br>`
    }
};
const scenes = {
    scene: {
        home: {
            my_room:{
                look: descriptions.look_description.home.my_room.look,
                bed: "bed",
                door: { name: "door", cardinal_direction: "west" },
                window: { name: "window", cardinal_direction: "east" },
                door_unlocked: false,
                door_open: false,
                items:{
                    pillow: "pillow",
                    quilt: "quilt",
                    blanket: "blanket"
                }
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
                outside_door: { name: "outside door", cardinal_direction: "west" }
            }
        }
    },
};
const actions = {
    look: "look",
    open: "open",
    attack: "attack",
    talk: "talk",
    take: "take",
    unlock: "unlock",
    grab: "grab",
    push: "push",
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
        through: "through"
    },
    open_door:{
        my_bedroom_door: function(minimap_image){
            descriptions.description_element.innerHTML = descriptions.action_description.home.my_room.open.door_unlocked;
            scenes.scene.home.my_room.door.name_open = true;
            minimap.draw_minimap(minimap_image);
        }
    }
};
const inventory = {
    inventory_list: document.getElementById("inventory"),
    pillow: {
        name: "pillow",
        taken: false,
        description: descriptions.look_description.home.my_room.items.pillow
    },
    blanket:{
        name: "blanket",
        taken: false,
        description: descriptions.look_description.home.my_room.items.blanket
    },
    quilt:{
        name: "quilt",
        taken: false,
        description: descriptions.look_description.home.my_room.items.quilt
    },
    bag:{
        name: "bag",
        taken: false,
        description: descriptions.look_description.home.living_room.items.bag
    },
    actions:{
        take_pillow: function(minimap_image){
            character.hands_free = false;
            descriptions.description_element.innerHTML += descriptions.action_description.home.my_room.take.pillow;
            minimap.draw_minimap(minimap_image);
            if(inventory.pillow.taken == false){
                let newItem = document.createElement("li");
                let newNode = document.createTextNode("Pillow");
                newItem.appendChild(newNode);
                inventory.inventory_list.appendChild(newItem);
                inventory.pillow.taken = true;
                console.log("I am running");
                console.log(inventory.pillow.taken + " " + inventory.quilt.taken + " " + inventory.blanket.taken);
            }
        },
        take_blanket: function(minimap_image){
            character.hands_free = false;
            
            description.innerHTML += descriptions.action_description.home.my_room.take.blanket;
            minimap.draw_minimap(minimap_image);
            if(inventory.blanket.taken == false){
                let newItem = document.createElement("li");
                let newNode = document.createTextNode("Blanket");
                newItem.appendChild(newNode);
                inventory.inventory_list.appendChild(newItem);
                inventory.blanket.taken = true;
                console.log("I am running");
                console.log(inventory.pillow.taken + " " + inventory.quilt.taken + " " + inventory.blanket.taken);
            }
        },
        take_quilt: function(minimap_image){
            character.hands_free = false;
            descriptions.description_element.innerHTML += descriptions.action_description.home.my_room.take.quilt;
            minimap.draw_minimap(minimap_image);
            if(inventory.quilt.taken == false){
                let newItem = document.createElement("li");
                let newNode = document.createTextNode("Quilt");
                newItem.appendChild(newNode);
                inventory.inventory_list.appendChild(newItem);
                inventory.quilt.taken = true;
                console.log("I am running");
                console.log(inventory.pillow.taken + " " + inventory.quilt.taken + " " + inventory.blanket.taken);
            }
            
        }
    }
};
function checkInput(){
    var text_input = document.getElementById("text-input");
    var text_input_lowercase = text_input.value.toLowerCase();
    var input = text_input_lowercase.split(" ");
    var description = document.getElementById("scene-description");
    var command_history = document.getElementById("command-history");
    switch(input[0]){
        case actions.look:{
        switch(locations.current_location){
            case locations.home.my_room:{
                description.innerHTML = "";
                switch(input[1]){
                    case actions.joining.at:{
                        console.log(input[1]);
                        if(input[2] == scenes.scene.home.my_room.bed){
                            console.log(input[2]);
                            description.innerHTML = descriptions.look_description.home.my_room.bed;
                            break;
                        } else if (input[2] == scenes.scene.home.my_room.door.name && scenes.scene.home.my_room.door.name){
                            if(scenes.scene.home.my_room.door.name_unlocked == false && scenes.scene.home.my_room.door.name_open == false){
                                description.innerHTML = descriptions.look_description.home.my_room.door_locked_closed;
                            } else if (scenes.scene.home.my_room.door.name_unlocked == true && scenes.scene.home.my_room.door.name_open == false){
                                description.innerHTML = descriptions.look_description.home.my_room.door_unlocked_closed;
                            } else if (scenes.scene.home.my_room.door.name_unlocked == true && scenes.scene.home.my_room.door.name_open == true){
                                description.innerHTML = descriptions.look_description.home.my_room.door_unlocked_opened;
                            }
                            break;
                        } else if(input[2] == scenes.scene.home.my_room.window.name){
                            description.innerHTML = descriptions.look_description.home.my_room.window;
                            break;
                        } else {
                            description.innerHTML = "Nothing to look at.";
                            console.log(input[2]);
                            break;
                        }
                    }
                    case locations.current_room:{
                        description.innerHTML += descriptions.look_description.home.my_room.look;
                        break;
                    }
                    case scenes.scene.home.my_room.window.name:{
                        description.innerHTML = descriptions.look_description.home.my_room.window;
                        break;
                    }
                    case scenes.scene.home.my_room.window.cardinal_direction:{
                        description.innerHTML = descriptions.look_description.home.my_room.window;
                        break;
                    }
                    case scenes.scene.home.my_room.bed:{
                        description.innerHTML = descriptions.look_description.home.my_room.bed;
                        break;
                    }
                    case scenes.scene.home.my_room.door.name:{
                        if(scenes.scene.home.my_room.door_unlocked == false){
                            description.innerHTML = descriptions.look_description.home.my_room.door_locked_closed;
                        } else if (scenes.scene.home.my_room.door_unlocked == true && scenes.scene.home.my_room.door_open == false){
                            description.innerHTML = descriptions.look_description.home.my_room.door_unlocked_closed;
                        } else if (scenes.scene.home.my_room.door_unlocked == true && scenes.scene.home.my_room.door_open == true){
                            description.innerHTML = descriptions.look_description.home.my_room.door_unlocked_opened;
                        }
                        break;
                    }
                    case scenes.scene.home.my_room.door.cardinal_direction:{
                        if(scenes.scene.home.my_room.door_unlocked == false){
                            description.innerHTML = descriptions.look_description.home.my_room.door_locked_closed;
                        } else if (scenes.scene.home.my_room.door_unlocked == true){
                            description.innerHTML = descriptions.look_description.home.my_room.door_unlocked_closed;
                        }
                        break;
                    }
                    default:{
                        description.innerHTML = "Look at what?";
                    }
                }
                break;
            }
            case locations.home.bedroom_hallway:{
                description.innerHTML = "";
                switch(input[1]){
                    case locations.current_room:{
                        description.innerHTML = descriptions.look_description.home.bedroom_hallway.look;
                        break;
                    }
                    default:{
                        description.innerHTML = "Look where?";
                    }
                }
                break;
            }
            case locations.home.living_room:{
                description.innerHTML = "";
                switch(input[1]){
                    case locations.current_room:{
                        description.innerHTML = descriptions.look_description.home.living_room.look;
                        break;
                    }
                    default:{
                        description.innerHTML = "Look where?";
                    }
                }
                break;
            }
            case locations.home.kitchen:{
                break;
            }
        }
        break;
        }
        case actions.open:{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.door.name:{
                            if(character.hands_free == false){
                                description.innerHTML += descriptions.action_description.hands_free.hands_full;
                            } else if(scenes.scene.home.my_room.door.name_unlocked == false && character.hands_free == false){
                                description.innerHTML = descriptions.action_description.home.my_room.open.door_locked;
                            } else if(scenes.scene.home.my_room.door.name_unlocked == true && inventory.quilt.taken == false && inventory.pillow.taken == false && inventory.blanket.taken == false && character.hands_free == true){
                                actions.open_door.my_bedroom_door(locations.home.my_room.minimap_image.door_open_with_pillow_quilt_blanket);
                            } else if (scenes.scene.home.my_room.door.name_unlocked == true && inventory.quilt.taken == false && inventory.pillow.taken == true && inventory.blanket.taken == false && character.hands_free == true){
                                actions.open_door.my_bedroom_door(locations.home.my_room.minimap_image.door_open_with_quilt_blanket);
                            } else if(scenes.scene.home.my_room.door.name_unlocked == true && inventory.quilt.taken == true && inventory.pillow.taken == false && inventory.blanket.taken == false && character.hands_free == true){
                                actions.open_door.my_bedroom_door(locations.home.my_room.minimap_image.door_open_with_pillow_blanket);
                            } else if(scenes.scene.home.my_room.door.name_unlocked == true && inventory.quilt.taken == false && inventory.pillow.taken == true && inventory.blanket.taken == true && character.hands_free == true){
                                actions.open_door.my_bedroom_door(locations.home.my_room.minimap_image.door_open_with_quilt);
                            } else if(scenes.scene.home.my_room.door.name_unlocked == true && inventory.quilt.taken == true && inventory.pillow.taken == true && inventory.blanket.taken == false && character.hands_free == true){
                                actions.open_door.my_bedroom_door(locations.home.my_room.minimap_image.door_open_with_blanket);
                            } else if(scenes.scene.home.my_room.door.name_unlocked == true && inventory.quilt.taken == true && inventory.pillow.taken == false && inventory.blanket.taken == true && character.hands_free == true){
                                actions.open_door.my_bedroom_door(locations.home.my_room.minimap_image.door_open_with_pillow);
                            } else if(scenes.scene.home.my_room.door.name_unlocked == true && inventory.quilt.taken == false && inventory.pillow.taken == false && inventory.blanket.taken == true && character.hands_free == true){
                                actions.open_door.my_bedroom_door(locations.home.my_room.minimap_image.door_open_with_pillow_quilt);
                            } else if(scenes.scene.home.my_room.door.name_unlocked == true && inventory.quilt.taken == true  && inventory.pillow.taken == true && inventory.blanket.taken == true && character.hands_free == true){
                                actions.open_door.my_bedroom_door(locations.home.my_room.minimap_image.door_open);
                            } 
                            break;
                        }
                        default:{
                            description.innerHTML += "Open what?";
                        }
                    }
                    break;
                }
            }
            break;
        }
        case actions.take:{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.items.pillow:{
                            if(inventory.pillow.taken ==                   false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_pillow(locations.home.my_room.minimap_image.door_closed_with_quilt_blanket);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              true
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_pillow(locations.home.my_room.minimap_image.door_closed_with_quilt);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              true
                                && inventory.quilt.taken ==                true
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_pillow(locations.home.my_room.minimap_image.door_closed);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                true
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_pillow(locations.home.my_room.minimap_image.door_closed_with_blanket);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_pillow(locations.home.my_room.minimap_image.door_open_with_pillow_quilt_blanket);}
                            else if(inventory.pillow.taken ==              false 
                                && inventory.blanket.taken ==              true
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_pillow(locations.home.my_room.minimap_image.door_open_with_quilt);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              true
                                && inventory.quilt.taken ==                true
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_pillow(locations.home.my_room.minimap_image.door_open);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                true
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_pillow(locations.home.my_room.minimap_image.door_open_with_blanket);}
                            else if(character.hands_free == false){description.innerHTML += "You already have something in your hands!";}
                            else {description.innerHTML += "<br>You've already taken this item.<br>";};
                            break;
                        }
                        case scenes.scene.home.my_room.items.quilt:{
                            if(inventory.pillow.taken ==                   false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_quilt(locations.home.my_room.minimap_image.door_closed_with_pillow_blanket);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              true
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_quilt(locations.home.my_room.minimap_image.door_closed_with_pillow);}
                            else if(inventory.pillow.taken ==              true
                                && inventory.blanket.taken ==              true
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_quilt(locations.home.my_room.minimap_image.door_closed);}
                            else if(inventory.pillow.taken ==              true
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_quilt(locations.home.my_room.minimap_image.door_closed_with_blanket);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_quilt(locations.home.my_room.minimap_image.door_open_with_pillow_quilt_blanket);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              true
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_quilt(locations.home.my_room.minimap_image.door_open_with_pillow);}
                            else if(inventory.pillow.taken ==              true
                                && inventory.blanket.taken ==              true
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_quilt(locations.home.my_room.minimap_image.door_open);}
                            else if(inventory.pillow.taken ==              true
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_quilt(locations.home.my_room.minimap_image.door_open_with_blanket);}
                            else if(character.hands_free == false){description.innerHTML += "You already have something in your hands!";}
                            else {
                                description.innerHTML += "<br>You've already taken this item.<br>";
                            }
                            break;
                        }
                        case scenes.scene.home.my_room.items.blanket:{
                            if(inventory.pillow.taken ==                   false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_blanket(locations.home.my_room.minimap_image.door_closed_with_pillow_quilt);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                true
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_blanket(locations.home.my_room.minimap_image.door_closed_with_pillow);}
                            else if(inventory.pillow.taken ==              true
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                true
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_blanket(locations.home.my_room.minimap_image.door_closed);}
                            else if(inventory.pillow.taken ==              true
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  false
                                && character.hands_free ==                 true
                            ){inventory.actions.take_blanket(locations.home.my_room.minimap_image.door_closed_with_quilt);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  true
                            ){inventory.actions.take_blanket(locations.home.my_room.minimap_image.door_open_with_pillow_quilt);}
                            else if(inventory.pillow.taken ==              false
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                true
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_blanket(locations.home.my_room.minimap_image.door_open_with_pillow);}
                            else if(inventory.pillow.taken ==              true
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                true
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_blanket(locations.home.my_room.minimap_image.door_open);}
                            else if(inventory.pillow.taken ==              true
                                && inventory.blanket.taken ==              false
                                && inventory.quilt.taken ==                false
                                && scenes.scene.home.my_room.door_open ==  true
                                && character.hands_free ==                 true
                            ){inventory.actions.take_blanket(locations.home.my_room.minimap_image.door_open_with_quilt);}
                            else if(character.hands_free == false){description.innerHTML += "You already have something in your hands!";}
                            else {
                                description.innerHTML += "<br>You've already taken this item.<br>";
                            }
                            break;
                        }
                        default:{
                            description.innerHTML += "<br>There's nothing there to take.<br>";
                        }
                    }
                }
            }
            break;
        }
        case actions.unlock:{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.door.name:{
                            description.innerHTML += descriptions.action_description.home.my_room.unlock.unlock_door;
                            scenes.scene.home.my_room.door.name_unlocked = true;
                            break;
                        }
                        default:{
                            description.innerHTML += "Unlock what?";
                        }
                    }
                    break;
                }
            }
        break;
        }
        case actions.movement.go:{
            switch(locations.current_location){
                case locations.home.my_room:{
                    switch(input[1]){
                        case scenes.scene.home.my_room.door.name:{
                            if(scenes.scene.home.my_room.door.name_open == true){
                                locations.set_current_location(locations.home.bedroom_hallway);
                                if(locations.home.bedroom_hallway.visited == false){ locations.home.bedroom_hallway.visited = true; };
                                description.innerHTML = descriptions.look_description.home.bedroom_hallway.look;
                                minimap.draw_minimap(locations.home.bedroom_hallway.minimap_image.default);
                                console.log(locations.home.bedroom_hallway.visited);
                            } else if (scenes.scene.home.my_room.door.name_open == false){
                                description.innerHTML = descriptions.look_description.home.my_room.door_closed_message;
                                console.log("I am running");
                            }
                            break;
                        }
                        case scenes.scene.home.my_room.door.cardinal_direction:{
                            if(scenes.scene.home.my_room.door.name_open == true){
                                locations.set_current_location(locations.home.bedroom_hallway);
                                if(locations.home.bedroom_hallway.visited == false){ locations.home.bedroom_hallway.visited = true; };
                                description.innerHTML = descriptions.look_description.home.bedroom_hallway.look;
                                minimap.draw_minimap(locations.home.bedroom_hallway.minimap_image.default);
                                console.log(locations.home.bedroom_hallway.visited);
                            } else if (scenes.scene.home.my_room.door.name_open == false){
                                description.innerHTML = descriptions.look_description.home.my_room.door_closed_message;
                                console.log("I am running");
                            }
                            break;
                        }
                        default:{
                            description.innerHTML = "Go where?";
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
                            } else if(inventory.pillow.taken == false && inventory.blanket.taken == true && inventory.quilt.taken == false){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_pillow_quilt);
                            } else if(inventory.pillow.taken == true && inventory.blanket.taken == true && inventory.quilt.taken == false){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_quilt);
                            } else if(inventory.pillow.taken == true && inventory.blanket.taken == false && inventory.quilt.taken == false){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_quilt_blanket);
                            } else if(inventory.pillow.taken == true && inventory.blanket.taken == false && inventory.quilt.taken == true){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_blanket);
                            } else if(inventory.pillow.taken == false && inventory.blanket.taken == false && inventory.quilt.taken == true){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_pillow_blanket);
                            } else if(inventory.pillow.taken == false && inventory.blanket.taken == true && inventory.quilt.taken == true){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open_with_pillow);
                            } else if(inventory.pillow.taken == true && inventory.blanket.taken == true && inventory.quilt.taken == true){
                                minimap.draw_minimap(locations.home.my_room.minimap_image.door_open);
                            }
                            break;
                        }
                        case scenes.scene.home.bedroom_hallway.living_room_door.cardinal_direction:{
                            locations.set_current_location(locations.home.living_room);
                            minimap.draw_minimap(locations.home.living_room.minimap_image.default);
                            console.log("I am running");
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
                            console.log("I am running");
                            break;
                        }
                    }
                    break;
                }
            }
            break;
        }
        default:{
            description.innerHTML += "<br>" + input + " is an invalid command";
        }
    }
    // command_history.innerHTML += text_input.value + "<br>";
    // console.log(command_history.childElementCount);
    // if(command_history.childElementCount > 20){
    //     command_history.removeChild(command_history.children[0]);
    // }
    text_input.value = "";
};

async function load_object_svg(){
    var minimap_document = document.getElementById("minimap-container");
    var minimap_svg = minimap_document.contentDocument;
    console.log(minimap_document);
    console.log(minimap_svg);
        
};
$(document).ready(()=>{
    minimap_document = document.getElementById("minimap-container");
    minimap_svg = minimap_document.contentDocument;var minimap_svg = minimap_document.contentDocument;
    console.log(minimap_document);
    console.log(minimap_svg);
}, 2000);
const load_document = new Promise(function(resolve, reject){
    document.getElementById("scene-description").innerHTML = story_dialogue.home.start;
    character.display_stats();
    character.display_character_profile(character.character_profile.character_profile_image);
    minimap.draw_minimap(locations.home.my_room.minimap_image.door_closed_with_pillow_quilt_blanket);
    locations.current_location = locations.home.my_room;
    resolve(load_object_svg);
    reject("object load-in rejected");
});
const scene_description_container = document.getElementById("scene-description-container");
var document_width;
function scene_description_container_width(){
    document_width = document.body.clientWidth;
    var scene_description_container_width_variable = document_width - 312;
    scene_description_container.style.width = scene_description_container_width_variable + "px";
    console.log(document_width);
    console.log(scene_description_container_width_variable);
};
window.addEventListener("resize", scene_description_container_width);
window.addEventListener("load", scene_description_container_width);
document.getElementById("text-input").addEventListener("keyup", function(e){e.preventDefault(); if(e.keyCode === 13){ checkInput(); }; });
document.getElementById("enter-button").addEventListener("click", checkInput);
load_document.then(load_object_svg);