const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001' 
    : 'https://preyashinsurance.com';

// ========== VISITOR COUNTER ==========
async function updateVisitorCount() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/visitor-count`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch visitor count');
        }

        const data = await response.json();
        
        // Update the counter with animation
        const counterElement = document.getElementById('visitorCount');
        if (counterElement) {
            const startCount = parseInt(counterElement.textContent.replace(/,/g, '')) || 0;
            const endCount = data.count;
            
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
        if (counterElement && !counterElement.textContent) {
            counterElement.textContent = '0';
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
