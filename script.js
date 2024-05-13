document.getElementById('secaoSelect').addEventListener('change', function() {
    var selectedSection = this.value;
    if (selectedSection) {
        var sectionElement = document.getElementById(selectedSection);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
