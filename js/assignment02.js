
    $(document).ready(function () {
        var femaleName1 = prompt("Please enter a female's first name (1 of 2)");
        var stateName = prompt("Please enter the name of a State");
        var geoFeature = prompt("Please enter a geographical feature");
        var maleName = prompt("Please enter a male's first name");
        var jobName = prompt("Please enter an occupation");
        var femaleName2 = prompt("Please enter another female's first name (2 of 2)");
        var noun1 = prompt("Please enter a noun (1 of 5)");
        var noun2 = prompt("Please enter a noun (2of 5)");
        var noun3 = prompt("Please enter a noun (3 of 5)");
        var colorName = prompt("Please enter a color");
        var noun4 = prompt("Please enter a noun (4 of 5)");
        var noun5 = prompt("Please enter a noun (5 of 5)");

        $("[data-id=femaleName1]").text(femaleName1);
        $("[data-id=stateName]").text(stateName);
        $("[data-id=geoFeature]").text(geoFeature);
        $("[data-id=maleName]").text(maleName);
        $("[data-id=jobName]").text(jobName);
        $("[data-id=femaleName2]").text(femaleName2);
        $("[data-id=noun1]").text(noun1);
        $("[data-id=noun2]").text(noun2);
        $("[data-id=noun3]").text(noun3);
        $("[data-id=colorName]").text(colorName);
        $("[data-id=noun4]").text(noun4);
        $("[data-id=noun5]").text(noun5);
    });

