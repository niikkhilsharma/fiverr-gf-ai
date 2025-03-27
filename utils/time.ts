export const FormatDateTime = (dateTimeString: string) => {
	const date = new Date(dateTimeString)
	const options = {
		hour: 'numeric' as 'numeric',
		minute: 'numeric' as 'numeric',
		second: 'numeric' as 'numeric',
		hour12: true,
	}
	return date.toLocaleString('en-US', options)
}
