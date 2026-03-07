/**
 * Estimate reading time for text content
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes, formatted as string
 */
export function getReadingTime(text: string, wordsPerMinute: number = 200): string {
  // Remove HTML tags if present
  const cleanText = text.replace(/<[^>]*>/g, '')
  
  // Count words (split by whitespace and filter empty strings)
  const wordCount = cleanText.split(/\s+/).filter(word => word.length > 0).length
  
  // Calculate reading time in minutes
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute)
  
  // Format the result
  if (readingTimeMinutes === 1) {
    return '1 min read'
  } else {
    return `${readingTimeMinutes} min read`
  }
}

/**
 * Get reading time from word count
 * @param wordCount - Number of words
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes, formatted as string
 */
export function getReadingTimeFromWordCount(wordCount: number, wordsPerMinute: number = 200): string {
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute)
  
  if (readingTimeMinutes === 1) {
    return '1 min read'
  } else {
    return `${readingTimeMinutes} min read`
  }
}