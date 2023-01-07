export default async function submitForm(formData) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Error sending message');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}