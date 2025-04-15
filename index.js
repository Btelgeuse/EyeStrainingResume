document.addEventListener('DOMContentLoaded', function() {
    // Fade in elements on page load with sketch-like appearance
    const sections = document.querySelectorAll('.name-photo-description, .skills, .education, .experiences');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px) rotate(' + (Math.random() * 2 - 1) + 'deg)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0) rotate(' + (Math.random() * 1 - 0.5) + 'deg)';
        }, 300 + (index * 200));
    });

    // Add hover effects for experience and education items
    const items = document.querySelectorAll('.experience-item, .education-item');
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
            this.style.borderRadius = '8px';
            this.style.padding = '10px';
            this.style.margin = '-10px';
            this.style.transform = 'scale(1.02) rotate(' + (Math.random() * 1 - 0.5) + 'deg)';
            this.style.boxShadow = '3px 3px 5px rgba(0,0,0,0.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.padding = '0';
            this.style.margin = '0';
            this.style.marginBottom = '25px';
            this.style.paddingBottom = '20px';
            this.style.transform = 'scale(1) rotate(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add doodle animations
    const doodles = document.querySelectorAll('.doodle');
    doodles.forEach(doodle => {
        setInterval(() => {
            const randomRotate = Math.random() * 6 - 3;
            const randomScale = 0.95 + Math.random() * 0.1;
            doodle.style.transition = 'transform 3s ease';
            doodle.style.transform = `rotate(${randomRotate}deg) scale(${randomScale})`;
        }, 3000);
    });

    // Add wiggle effect to pins
    const pins = document.querySelectorAll('.pin');
    pins.forEach(pin => {
        setInterval(() => {
            const randomRotate = Math.random() * 10 - 5;
            pin.style.transition = 'transform 2s ease';
            pin.style.transform = `rotate(${randomRotate}deg)`;
        }, 2000);
    });

    // Add "hand-drawn" scribble effect to list items
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.2s ease';
            this.style.backgroundImage = 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'none\' stroke=\'%23c9e4de\' stroke-width=\'4\' stroke-dasharray=\'6, 14\' stroke-dashoffset=\'0\' stroke-linecap=\'square\'/%3E%3C/svg%3E")';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundImage = 'none';
        });
    });

    // Add print functionality with a sketch-styled button
    const addPrintButton = () => {
        const footer = document.querySelector('footer');
        
        if (footer) {
            const printButton = document.createElement('button');
            printButton.textContent = '✎ Print Resume';
            printButton.className = 'print-button';
            
            printButton.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) rotate(1deg)';
                this.style.boxShadow = '5px 5px 0 rgba(0,0,0,0.1)';
            });
            
            printButton.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotate(0)';
                this.style.boxShadow = '3px 3px 0 rgba(0,0,0,0.1)';
            });
            
            printButton.addEventListener('click', () => {
                window.print();
            });
            
            footer.appendChild(printButton);
        }
    };
    
    addPrintButton();
    
    // Add random pencil marks animation
    const addPencilMarks = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const pencilMark = document.createElement('div');
            pencilMark.className = 'pencil-mark';
            pencilMark.style.position = 'absolute';
            pencilMark.style.width = '40px';
            pencilMark.style.height = '4px';
            pencilMark.style.backgroundColor = 'rgba(0,0,0,0.05)';
            pencilMark.style.borderRadius = '3px';
            pencilMark.style.right = (Math.random() * 50) + 'px';
            pencilMark.style.top = (Math.random() * 100) + 'px';
            pencilMark.style.transform = 'rotate(' + (Math.random() * 45 - 22.5) + 'deg)';
            pencilMark.style.zIndex = '0';
            
            section.appendChild(pencilMark);
        });
    };
    
    addPencilMarks();
});
