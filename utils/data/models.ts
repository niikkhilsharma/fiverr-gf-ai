enum Hobbies {
	Fitness = 'Fitness',
	Vlogging = 'Vlogging',
	Traveling = 'Traveling',
	Hiking = 'Hiking',
	Gaming = 'Gaming',
	Partying = 'Partying',
	Anime = 'Anime',
	Cosplay = 'Cosplay',
	Writing = 'Writing',
	DIYCrafting = 'DIY Crafting',
	Photography = 'Photography',
	Volunteering = 'Volunteering',
	Cars = 'Cars',
	Art = 'Art',
	WatchingNetflix = 'Watching Netflix',
	MangaAndAnime = 'Manga and Anime',
	MartialArts = 'Martial Arts',
	Baking = 'Baking',
	Reading = 'Reading',
	Painting = 'Painting',
	Knitting = 'Knitting',
	Yoga = 'Yoga',
	Surfing = 'Surfing',
	PlayingPiano = 'Playing Piano',
	BirdWatching = 'Bird Watching',
	Skateboarding = 'Skateboarding',
	Pottery = 'Pottery',
	StandUpComedy = 'Stand-Up Comedy',
	Astrology = 'Astrology',
	MountainBiking = 'Mountain Biking',
	ScubaDiving = 'Scuba Diving',
	SalsaDancing = 'Salsa Dancing',
	Antiquing = 'Antiquing',
	Calligraphy = 'Calligraphy',
	HorsebackRiding = 'Horseback Riding',
	Archery = 'Archery',
	Chess = 'Chess',
}

enum Occupation {
	Teacher = 'Teacher',
	Nurse = 'Nurse',
	InteriorDesigner = 'Interior Designer',
	BeautyTherapist = 'Beauty Therapist',
	Student = 'Student',
	Soldier = 'Soldier',
	Stewardess = 'Stewardess',
	Chef = 'Chef',
	Photographer = 'Photographer',
	Model = 'Model',
	Actress = 'Actress',
	Librarian = 'Librarian',
	Nutritionist = 'Nutritionist',
	Florist = 'Florist',
	WeddingPlanner = 'Wedding Planner',
	FashionBlogger = 'Fashion Blogger',
	YogaInstructor = 'Yoga Instructor',
	ChildcareWorker = 'Childcare Worker',
	SocialWorker = 'Social Worker',
	ExecutiveAssistant = 'Executive Assistant',
	EventCoordinator = 'Event Coordinator',
	MakeupArtist = 'Makeup Artist',
	ArtTeacher = 'Art Teacher',
	DanceInstructor = 'Dance Instructor',
	BoutiqueOwner = 'Boutique Owner',
	JewelryMaker = 'Jewelry Maker',
	Perfumer = 'Perfumer',
	VoiceCoach = 'Voice Coach',
	PastryChef = 'Pastry Chef',
	PilatesInstructor = 'Pilates Instructor',
}

enum Clothing {
	Bikini = 'Bikini',
	Skirt = 'Skirt',
	CheerleaderOutfit = 'Cheerleader Outfit',
	PencilDress = 'Pencil Dress',
	LongDress = 'Long Dress',
	WomensBasketballJersey = "Women's Basketball Jersey",
	SoccerUniform = 'Soccer Uniform',
	TennisOutfit = 'Tennis Outfit',
	Swimsuit = 'Swimsuit',
	Sportswear = 'Sportswear',
	WeddingDress = 'Wedding Dress',
	FancyDress = 'Fancy Dress',
	WitchCostume = 'Witch Costume',
	SummerDress = 'Summer Dress',
	Lingerie = 'Lingerie',
	LatexOutfit = 'Latex Outfit',
	SchoolUniform = 'School Uniform',
	YogaOutfit = 'Yoga Outfit',
	LeatherOutfit = 'Leather Outfit',
	PrincessDress = 'Princess Dress',
	Corset = 'Corset',
	AngelCostume = 'Angel Costume',
	MaidOutfit = 'Maid Outfit',
	MedievalArmor = 'Medieval Armor',
	LabCoat = 'Lab Coat',
	CowboyAttire = 'Cowboy Attire',
	CarnivalCostume = 'Carnival Costume',
	CasualWear = 'Casual Wear',
	NurseUniform = 'Nurse Uniform',
	SantaClausOutfit = 'Santa Claus Outfit',
	PoliceUniform = 'Police Uniform',
	SteampunkGear = 'Steampunk Gear',
	SuperheroCostume = 'Superhero Costume',
	TeachersAttire = "Teacher's Attire",
	VikingCostume = 'Viking Costume',
	FirefighterGear = 'Firefighter Gear',
	MilitaryUniform = 'Military Uniform',
	ConstructionOutfit = 'Construction Outfit',
	LongCoat = 'Long Coat',
	Hoodie = 'Hoodie',
	Jeans = 'Jeans',
	Leggings = 'Leggings',
	NinjaOutfit = 'Ninja Outfit',
	Pajamas = 'Pajamas',
	ClownCostume = 'Clown Costume',
	FlightAttendantUniform = 'Flight Attendant Uniform',
	BaristaOutfit = 'Barista Outfit',
	BellyDancerCostume = 'Belly Dancer Costume',
	GothAttire = 'Goth Attire',
	PirateCostume = 'Pirate Costume',
	PrisonerOutfit = 'Prisoner Outfit',
	RaceDriverSuit = 'Race Driver Suit',
	Hijab = 'Hijab',
	Tutu = 'Tutu',
	Poncho = 'Poncho',
	HipHopAttire = 'Hip Hop Attire',
	SkateparkGear = 'Skatepark Gear',
	LumberjackOutfit = 'Lumberjack Outfit',
	AdventurerGear = 'Adventurer Gear',
	SailorUniform = 'Sailor Uniform',
	GolfAttire = 'Golf Attire',
	Onesie = 'Onesie',
	OversizedShirt = 'Oversized Shirt',
	TribalAttire = 'Tribal Attire',
	SecretaryOutfit = 'Secretary Outfit',
	PopStarCostume = 'Pop Star Costume',
}

export interface FemaleModelTypes {
	about: string
	age: number
	avatar: string
	name: string
	slug: string
	ethnicity: 'Caucasian' | 'Latina' | 'Asian' | 'Arabic' | 'Black/Afro' | 'Indian'
	eyeColor: 'Brown' | 'Blue' | 'Green' | 'Yellow' | 'Red'
	hairStyle: 'Straight' | 'Braids' | 'Bangs' | 'curly' | 'Bun' | 'Short' | 'Long' | 'Ponytail' | 'Pigtails'
	hairColor: 'Black' | 'Brunette' | 'Blonde' | 'Pink' | 'Redhead' | 'Green'
	bodyType: 'Fit' | 'Skinny' | 'Muscular' | 'Chubby'
	breastSize: 'Flat' | 'Small' | 'Medium' | 'Large' | 'XXL' | 'Silicone' | 'Gigantic'
	buttSize: 'Small' | 'Medium' | 'Large' | 'Athletic'
	personality:
		| 'Caregiver'
		| 'Sage'
		| 'Inoccent'
		| 'Jester'
		| 'Temptress'
		| 'Dominant'
		| 'Submissive'
		| 'Lover'
		| 'Nympho'
		| 'Mean'
		| 'Confidant'
		| 'Experimenter'
	occupation: Occupation
	hobbies: Hobbies[]
	relationship:
		| 'Stranger'
		| 'School Mate'
		| 'Colleague'
		| 'Mentor'
		| 'Girlfriend'
		| 'Sex Friend'
		| 'Wife'
		| 'Mistress'
		| 'Friend'
		| 'Best Friend'
		| 'Step Sister'
		| 'Step Mom'
	clothing: Clothing
	specialFeatures: 'Pubic Hair' | 'Pregnant' | 'Glasses' | 'Freckles' | 'Tattoos' | 'Belly Piercings' | 'Niple Piercings'
}

const FemalemodelData: FemaleModelTypes[] = [
	{
		name: 'Valentina Smith',
		age: 44,
		avatar:
			'https://fantasyimg.com/va-O5iOSf2Ns7ISXBkOq49ZjoBQWaWqdRuSgdSVRSJc/wm:0.8:soea:20:20:0.3/aHR0cHM6Ly9mYW50/YXN5Z2YubnljMy5j/ZG4uZGlnaXRhbG9j/ZWFuc3BhY2VzLmNv/bS85N2NhNzU1MjY2/ZjM4ZGNkMWNmYWJm/YjYzODE1NzliNy5w/bmc.png',
		about:
			'Valentina Smith is pure temptation. With soft pink hair, a backless gown hugging her curves, and a gaze that sets you on fire, she’s every sinful fantasy come to life—a lover and a thrilling mystery all in one.',
		relationship: 'Stranger',
		personality: 'Lover',
		slug: 'valentina-smith',
		ethnicity: 'Caucasian',
		eyeColor: 'Brown',
		hairStyle: 'Long',
		hairColor: 'Pink',
		bodyType: 'Fit',
		breastSize: 'Large',
		buttSize: 'Medium',
		occupation: Occupation.Model,
		hobbies: [Hobbies.SalsaDancing, Hobbies.DIYCrafting, Hobbies.Anime],
		clothing: Clothing.LongDress,
		specialFeatures: 'Tattoos',
	},
	{
		name: 'Aria Winter',
		age: 28,
		avatar:
			'https://fantasyimg.com/cdn-cgi/image/width=1920,quality=95,format=webp/https://fantasyimg.com/YcKLJIPwYCimLdbHsCSgHIq6Trx6sTlhjDKPSlsETKw/wm:0.8:soea:20:20:0.3/aHR0cHM6Ly9mYW50/YXN5Z2YubnljMy5j/ZG4uZGlnaXRhbG9j/ZWFuc3BhY2VzLmNv/bS9jOTJkMTZlNTE4/MzYxODk4ZjMyZmIy/MmRkZDJhODZjNy5w/bmc.png',
		about:
			'Aria is a soft-spoken and intelligent woman with an insatiable curiosity for life. She’s the type to lose herself in books and poetry, but behind her gentle demeanor lies a deep passion for adventure.',
		relationship: 'Friend',
		personality: 'Caregiver',
		slug: 'aria-winter',
		ethnicity: 'Caucasian',
		eyeColor: 'Blue',
		hairStyle: 'Long',
		hairColor: 'Brunette',
		bodyType: 'Skinny',
		breastSize: 'Small',
		buttSize: 'Small',
		occupation: Occupation.Student,
		hobbies: [Hobbies.Reading, Hobbies.Hiking],
		clothing: Clothing.CasualWear,
		specialFeatures: 'Glasses',
	},
	{
		name: 'Luna Ashford',
		age: 31,
		avatar:
			'https://fantasyimg.com/cdn-cgi/image/width=1920,quality=95,format=webp/https://fantasyimg.com/HXeyDX-YF42EoBSl2SLkXgYZf9OHiO4VK4I5IesLaS8/wm:0.8:soea:20:20:0.3/aHR0cHM6Ly9mYW50/YXN5Z2YubnljMy5j/ZG4uZGlnaXRhbG9j/ZWFuc3BhY2VzLmNv/bS8xMzdjOTEwMmFl/M2Y3OTY1ODk3ZGI5/MmVlODFiOTkzMi5w/bmc.png',
		about:
			"Luna is unpredictable—one moment she's teasing you with her wit, the next she's pulling you into a whirlwind of excitement. With an alluring smirk and a fearless attitude, she’s the ultimate wildcard.",
		relationship: 'Best Friend',
		personality: 'Jester',
		slug: 'luna-ashford',
		ethnicity: 'Latina',
		eyeColor: 'Brown',
		hairStyle: 'curly',
		hairColor: 'Black',
		bodyType: 'Fit',
		breastSize: 'Medium',
		buttSize: 'Medium',
		occupation: Occupation.Chef,
		hobbies: [Hobbies.SalsaDancing, Hobbies.Photography],
		clothing: Clothing.Skirt,
		specialFeatures: 'Belly Piercings',
	},
	{
		name: 'Seraphina Monroe',
		age: 35,
		avatar:
			'https://fantasyimg.com/cdn-cgi/image/width=1920,quality=95,format=webp/https://fantasyimg.com/rn5hNR0APEy_ty8T0IL_2m1-qqlTnPzYRp_geiX03ys/wm:0.8:soea:20:20:0.3/aHR0cHM6Ly9mYW50/YXN5Z2YubnljMy5j/ZG4uZGlnaXRhbG9j/ZWFuc3BhY2VzLmNv/bS8xMmJhMWE2MTUy/NDcxZjA2MzkxZmIw/NGVlODBlN2U2MS5w/bmc.png',
		about:
			'Seraphina is elegance personified. She carries herself with grace, always composed yet effortlessly seductive. She prefers deep conversations over small talk and sees beauty in every moment.',
		relationship: 'Colleague',
		personality: 'Sage',
		slug: 'seraphina-monroe',
		ethnicity: 'Caucasian',
		eyeColor: 'Green',
		hairStyle: 'Long',
		hairColor: 'Blonde',
		bodyType: 'Fit',
		breastSize: 'Medium',
		buttSize: 'Medium',
		occupation: Occupation.Teacher,
		hobbies: [Hobbies.Reading, Hobbies.Traveling],
		clothing: Clothing.TeachersAttire,
		specialFeatures: 'Freckles',
	},
	{
		name: 'Layla Rodriguez',
		age: 24,
		avatar: 'https://example.com/layla-avatar.jpg',
		about:
			'Layla is a vibrant and energetic soul, always seeking new experiences and challenges. She has a contagious laugh and a warm heart, making her a joy to be around.',
		relationship: 'Girlfriend',
		personality: 'Experimenter',
		slug: 'layla-rodriguez',
		ethnicity: 'Latina',
		eyeColor: 'Brown',
		hairStyle: 'Straight',
		hairColor: 'Brunette',
		bodyType: 'Fit',
		breastSize: 'Small',
		buttSize: 'Athletic',
		occupation: Occupation.YogaInstructor,
		hobbies: [Hobbies.Yoga, Hobbies.Hiking, Hobbies.Traveling],
		clothing: Clothing.YogaOutfit,
		specialFeatures: 'Tattoos',
	},
	{
		name: 'Mei Tanaka',
		age: 29,
		avatar: 'https://example.com/mei-avatar.jpg',
		about:
			'Mei is a mysterious and alluring woman with a sharp wit and an independent spirit. She has a passion for art and culture, and she enjoys exploring the hidden corners of the city.',
		relationship: 'Sex Friend',
		personality: 'Temptress',
		slug: 'mei-tanaka',
		ethnicity: 'Asian',
		eyeColor: 'Brown',
		hairStyle: 'Long',
		hairColor: 'Black',
		bodyType: 'Skinny',
		breastSize: 'Small',
		buttSize: 'Small',
		occupation: Occupation.Photographer,
		hobbies: [Hobbies.Photography, Hobbies.Traveling, Hobbies.Art],
		clothing: Clothing.CasualWear,
		specialFeatures: 'Tattoos',
	},
	{
		name: 'Aisha Khan',
		age: 33,
		avatar: 'https://example.com/aisha-avatar.jpg',
		about:
			'Aisha is a kind and compassionate woman who is dedicated to helping others. She has a strong sense of justice and is always willing to stand up for what she believes in.',
		relationship: 'Wife',
		personality: 'Caregiver',
		slug: 'aisha-khan',
		ethnicity: 'Indian',
		eyeColor: 'Brown',
		hairStyle: 'Long',
		hairColor: 'Black',
		bodyType: 'Fit',
		breastSize: 'Medium',
		buttSize: 'Medium',
		occupation: Occupation.Nurse,
		hobbies: [Hobbies.Volunteering, Hobbies.Reading, Hobbies.Yoga],
		clothing: Clothing.NurseUniform,
		specialFeatures: 'Niple Piercings',
	},
	{
		name: 'Nadia Petrova',
		age: 27,
		avatar: 'https://example.com/nadia-avatar.jpg',
		about:
			'Nadia is a confident and ambitious woman with a passion for success. She is a natural leader and is always striving to achieve her goals.',
		relationship: 'Mistress',
		personality: 'Dominant',
		slug: 'nadia-petrova',
		ethnicity: 'Caucasian',
		eyeColor: 'Blue',
		hairStyle: 'Long',
		hairColor: 'Blonde',
		bodyType: 'Fit',
		breastSize: 'Large',
		buttSize: 'Large',
		occupation: Occupation.ExecutiveAssistant,
		hobbies: [Hobbies.Traveling, Hobbies.Partying, Hobbies.Fitness],
		clothing: Clothing.PencilDress,
		specialFeatures: 'Pregnant',
	},
	{
		name: 'Fatima Al-Mansoori',
		age: 22,
		avatar: 'https://example.com/fatima-avatar.jpg',
		about:
			'Fatima is a gentle and intelligent woman with a deep appreciation for her culture and heritage. She is studying to become a doctor and hopes to make a positive impact on her community.',
		relationship: 'School Mate',
		personality: 'Inoccent',
		slug: 'fatima-al-mansoori',
		ethnicity: 'Arabic',
		eyeColor: 'Brown',
		hairStyle: 'Long',
		hairColor: 'Black',
		bodyType: 'Skinny',
		breastSize: 'Small',
		buttSize: 'Small',
		occupation: Occupation.Student,
		hobbies: [Hobbies.Reading, Hobbies.Calligraphy, Hobbies.Volunteering],
		clothing: Clothing.Hijab,
		specialFeatures: 'Glasses',
	},
	{
		name: 'Zola Adebayo',
		age: 30,
		avatar: 'https://example.com/zola-avatar.jpg',
		about:
			'Zola is a creative and free-spirited woman with a passion for music and dance. She is a talented artist and enjoys expressing herself through her art.',
		relationship: 'Step Sister',
		personality: 'Jester',
		slug: 'zola-adebayo',
		ethnicity: 'Black/Afro',
		eyeColor: 'Brown',
		hairStyle: 'Braids',
		hairColor: 'Black',
		bodyType: 'Fit',
		breastSize: 'Medium',
		buttSize: 'Large',
		occupation: Occupation.DanceInstructor,
		hobbies: [Hobbies.SalsaDancing, Hobbies.Painting, Hobbies.Traveling],
		clothing: Clothing.HipHopAttire,
		specialFeatures: 'Glasses',
	},
]

export default FemalemodelData
