export const transformTimestamp =(timestamp: number) => {

	return { 
		date: new Intl.DateTimeFormat("ru-Ru", {
    day: "numeric",
    month: "numeric",
		year:'numeric'
	}).format(timestamp),
	time: new Intl.DateTimeFormat("ru-Ru", {
    hour: "numeric",
    minute: "numeric",
	}).format(timestamp)
}
}