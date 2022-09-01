const toggleSubscriptionDuration = (triggerSelector, monthlyPriceSelector, yearlyPriceSelector) => {

    const trigger = document.querySelector(triggerSelector),
        monthlyPrice = document.querySelectorAll(monthlyPriceSelector),
        yearlyPrice = document.querySelectorAll(yearlyPriceSelector);

    trigger.addEventListener('click', (event) => {
        const monthlyBtn = document.querySelector('.content__button-monthly'),
            yearlyBtn = document.querySelector('.content__button-yearly');

        if (event.target.classList.contains('content__button-monthly') && event.target.classList.contains('content__button-active')) {

            monthlyBtn.classList.toggle('content__button-active');
            yearlyBtn.classList.toggle('content__button-active');

            monthlyBtn.classList.add('fadeOutRight');
            yearlyBtn.classList.add('fadeInLeft');

            setTimeout(() => {
                monthlyBtn.classList.remove('fadeOutRight');
                yearlyBtn.classList.remove('fadeInLeft');
            }, 1000);

            monthlyPrice.forEach(el => {
                el.classList.add('fadeOut');
                el.style.display = 'none';

                setTimeout(() => {
                    el.classList.remove('fadeOut');
                }, 500);
            });

            yearlyPrice.forEach(el => {
                el.classList.add('fadeIn');
                el.style.display = 'block';

                setTimeout(() => {
                    el.classList.remove('fadeIn');
                }, 500);
            });
        }

        if (event.target.classList.contains('content__button-yearly') && event.target.classList.contains('content__button-active')) {

            yearlyBtn.classList.toggle('content__button-active');
            monthlyBtn.classList.toggle('content__button-active');

            yearlyBtn.classList.add('fadeOutLeft');
            monthlyBtn.classList.add('fadeInRight');

            setTimeout(() => {
                yearlyBtn.classList.remove('fadeOutLeft');
                monthlyBtn.classList.remove('fadeInRight');
            }, 1000);

            monthlyPrice.forEach(el => {
                el.classList.add('fadeIn');
                el.style.display = 'block';

                setTimeout(() => {
                    el.classList.remove('fadeIn');
                }, 500);
            });

            yearlyPrice.forEach(el => {
                el.style.display = 'none';

                setTimeout(() => {
                    el.classList.add('fadeOut');
                    el.classList.remove('fadeOut');
                }, 500);
            });
        }
    })
}

export default toggleSubscriptionDuration;