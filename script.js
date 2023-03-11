//Changes depending on what day it is.
const d = new Date();
    
switch(d.getDay()) {
    case 0:
        document.write("Sunday,hope we get through this week.");
        break;
    case 1:
        document.write("Happy Monday.Well no on is actually happy on a Monday.");
        break;
    case 2:
        document.write("Today is Tuesday.Another day,another struggle");
        break;
    case 3:
        document.write("Today is Wednesday.I know we all wish everday of the week was a weekend");
        break;
    case 4:
        document.write("Today is Thursday.Just one more day and Friday will be here");
        break;
    case 5:
        document.write("Its finally Friday. Now we make questionable finaancial decisions....");
        break;
    case 6:
        document.write("Not having to go to work. What can be better than this....Saturday");
        break;   
    default:
        document.write("No information available for that day.");
        break;
}