document.addEventListener('DOMContentLoaded', function () {
    Number.prototype.format = function (n) {
        var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
        return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
    };

    document.querySelectorAll('.count').forEach(function (element) {
        var start = 0;
        var end = parseInt(element.textContent.replace(/,/g, '')); // Remove commas and parse as integer

        var step = function (timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;

            element.textContent = Math.floor(progress / 10 * (end / 100)).format(); // Adjust the division factor as needed

            if (progress < 1000) {
                requestAnimationFrame(step);
            } else {
                element.textContent = end.format();
            }
        };

        requestAnimationFrame(step);
    });
});
