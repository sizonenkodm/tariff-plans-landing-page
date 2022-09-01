import toggleSubscriptionDuration from './modules/toggleSubscriptionDuration';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    toggleSubscriptionDuration('.content__toggle', '.monthly', '.yearly');
});