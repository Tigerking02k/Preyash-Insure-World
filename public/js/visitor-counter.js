// ========== VISITOR COUNTER ==========
async function updateVisitorCount() {
    try {
        // Using a more reliable counter API with specific namespace and key
        const namespace = 'preyash-insure';
        const key = 'visitor-counter';
        const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
        
        if (!response.ok) {
            throw new Error('Counter API request failed');
        }
        
        const data = await response.json();
        
        // Update the counter with animation
        const counterElement = document.getElementById('visitorCount');
        if (counterElement) {
            const startCount = parseInt(counterElement.textContent.replace(/,/g, '')) || 0;
            const endCount = data.value;
            
            // Animate the counter
            const duration = 1000;
            const start = Date.now();
            
            const animate = () => {
                const now = Date.now();
                const progress = (now - start) / duration;
                
                if (progress < 1) {
                    const currentCount = Math.floor(startCount + (endCount - startCount) * progress);
                    counterElement.textContent = currentCount.toLocaleString();
                    requestAnimationFrame(animate);
                } else {
                    counterElement.textContent = endCount.toLocaleString();
                }
            };
            
            animate();
        }

    } catch (error) {
        console.error('Error updating visitor count:', error);
        const counterElement = document.getElementById('visitorCount');
        if (counterElement) {
            // Keep the existing count if there is one, otherwise show 1
            const currentCount = parseInt(counterElement.textContent.replace(/,/g, '')) || 1;
            counterElement.textContent = currentCount.toLocaleString();
        }
    }
}

// Initialize visitor count on page load
document.addEventListener('DOMContentLoaded', updateVisitorCount);

// Update count when page becomes visible again
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        updateVisitorCount();
    }
});
