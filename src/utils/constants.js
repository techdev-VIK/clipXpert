

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + import.meta.env.VITE_GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=" + import.meta.env.VITE_GOOGLE_API_KEY + "&q=";



export const commentData = [
    {
        name: "Alice Johnson",
        text: "This is such a helpful post! Thanks for sharing.",
        replies: [
            {
                name: "Michael Smith",
                text: "Glad you found it useful, Alice!",
                replies: [
                    {
                        name: "Sarah Lee",
                        text: "Same here! I bookmarked this for future reference.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "David Williams",
        text: "I have a different viewpoint on this. While it's a great post, I think there's more to consider.",
        replies: [
            {
                name: "Emily Brown",
                text: "That's interesting! What aspects do you think need more discussion?",
                replies: [
                    {
                        name: "James Wilson",
                        text: "I'd love to hear more details too!",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Sophia Martinez",
        text: "I tried implementing this, but I'm facing an issue. Can someone help?",
        replies: [
            {
                name: "Daniel Thompson",
                text: "Sure! What problem are you facing?",
                replies: [
                    {
                        name: "Sophia Martinez",
                        text: "The nested structure isn't rendering properly in my project.",
                        replies: [
                            {
                                name: "Daniel Thompson",
                                text: "Try checking how you're mapping over the data. You might need to ensure recursive rendering.",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Olivia Anderson",
        text: "Great explanation! This is super useful for beginners.",
        replies: [
            {
                name: "Liam Evans",
                text: "I agree! The way it’s broken down makes it easy to understand.",
                replies: [
                    {
                        name: "Emma Watson",
                        text: "Yes, and the example is practical. Makes a lot of sense.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Noah Harris",
        text: "Has anyone tried a different approach to solve this problem?",
        replies: [
            {
                name: "Charlotte White",
                text: "Yes, I used a slightly different recursive method, and it worked well!",
                replies: [
                    {
                        name: "Lucas Scott",
                        text: "Could you share your approach? Would love to compare.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Henry Carter",
        text: "This reminds me of a discussion we had in a forum last week.",
        replies: [
            {
                name: "Amelia Hill",
                text: "Oh really? Do you have a link to that discussion?",
                replies: [
                    {
                        name: "Henry Carter",
                        text: "Yes! I'll DM you the link.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Ethan Lewis",
        text: "What are some common mistakes people make while implementing this?",
        replies: [
            {
                name: "Mia Walker",
                text: "One mistake is not properly handling deeply nested replies.",
                replies: [
                    {
                        name: "Oliver Green",
                        text: "Another common mistake is using an index as a key instead of a unique ID.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Isabella Adams",
        text: "This makes a lot of sense. Thank you for sharing!",
        replies: []
    },
    {
        name: "Mason Bennett",
        text: "How would this work in a real-world project?",
        replies: [
            {
                name: "Harper Robinson",
                text: "You could use this for nested comments in a blog or discussion forum.",
                replies: [
                    {
                        name: "Mason Bennett",
                        text: "That makes sense! Thanks for the insight.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Lily Parker",
        text: "Can someone explain the recursion concept behind this?",
        replies: [
            {
                name: "William Torres",
                text: "Sure! The component calls itself recursively to handle nested replies.",
                replies: [
                    {
                        name: "Lily Parker",
                        text: "Got it! That makes things much clearer.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Elijah Brooks",
        text: "Just dropping by to say this is awesome!",
        replies: [
            {
                name: "Ava Cooper",
                text: "Totally agree! Great discussion here.",
                replies: []
            }
        ]
    },
    {
        name: "Lucas Baker",
        text: "Does this method perform well with a large dataset?",
        replies: [
            {
                name: "Grace Hernandez",
                text: "It depends on how you handle rendering. Virtualization might help for very large lists.",
                replies: [
                    {
                        name: "Lucas Baker",
                        text: "Interesting! I'll look into that.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Benjamin Reed",
        text: "This is really helpful. Thanks for taking the time to explain it!",
        replies: []
    },
    {
        name: "Avery Murphy",
        text: "How would you handle state updates in a real-time application?",
        replies: [
            {
                name: "Chloe Foster",
                text: "You'd probably use WebSockets or polling to keep things updated in real time.",
                replies: [
                    {
                        name: "Avery Murphy",
                        text: "Thanks! That makes sense.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Jack Mitchell",
        text: "What’s the best way to store nested comments in a database?",
        replies: [
            {
                name: "Eleanor Griffin",
                text: "One way is using a parent-child relationship with IDs for each comment.",
                replies: [
                    {
                        name: "Jack Mitchell",
                        text: "Nice! I'll read more about that approach.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        name: "Daniel Ross",
        text: "Can I use this same approach for other hierarchical data?",
        replies: [
            {
                name: "Natalie Carter",
                text: "Yes! It's useful for file systems, category trees, and more.",
                replies: [
                    {
                        name: "Daniel Ross",
                        text: "Thanks! That gives me some ideas.",
                        replies: []
                    }
                ]
            }
        ]
    }
];
