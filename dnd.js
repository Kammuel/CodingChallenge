function $(element)
{
    var element = document.getElementById("element");
    return element
}


function getRace()
{
    var race = document.getElementById("race").value;
    alert(race);
    var index = document.getElementById("race").selectedIndex;
    alert(index);
    
    /*var strength = 2;
    $("strength").value = 2;
    
    -----THIS IS WHERE I AM TRYING TO RESET THE VALUE OF WHICHEVER ATTRIBUTE-----

    */

}

function getClass()
{
    var classType = document.getElementById("class").value;
    alert(classType);
}

//This function was originally designed to decrease the amount of points
//left available to add to your character.  I was trying to do an if/else 
//to see if the new value was higher to then decrease the points.
function points(id)
{
    var oldPoints = id.value;
    alert(oldPoints);
    var newPoints = id.value;
    oldPoints = newPoints;
    alert(newPoints);
}

