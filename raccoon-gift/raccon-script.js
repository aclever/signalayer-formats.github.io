function runApp() {
    var racContainer = document.createElement('div');
    racContainer.className = 'raccoon-container';
    var rac1 = document.createElement('img');
    rac1.src = 'animation-1-1_no-bg.gif';

    var rac2 = document.createElement('img');
    rac2.src = 'animation-1-3_no-bg.gif';
    rac2.className = 'above';

    racContainer.appendChild(rac1);
    document.body.appendChild(racContainer);


    var step = 1;

    var blocked = false;

    rac1.addEventListener('click', function () {
        if (blocked) return false;
        blocked = true;

        if (step === 1) {

            analytics.track("Click on raccoon [Help]");

            setTimeout(function () {
                rac1.remove();
                racContainer.appendChild(rac2);
                blocked = false;
                step = 2;
            }, 700);

            rac1.src = 'animation-1-2_no-bg.gif';
        }
    });


    rac2.addEventListener('click', function () {
        rac2.src = 'animation-1-4_no-bg.gif';
        startConfetti();     //starts the confetti animation

        analytics.track("Click on raccoon [Open Gift]");

        setTimeout(function () {
            racContainer.className = 'raccoon-container hide-out';
            Signalayer.API.show("5b79109b26df76000fcd226a");
        }, 200);

        setTimeout(function () {
            stopConfetti();
        }, 2000);
    });

}