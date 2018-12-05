export const durationFrom = (started, finished) => {
  const duration = (new Date(finished).getTime() - new Date(started).getTime()) / 1000;
  return duration;
};

export const timeInWords = (duration) => {
  const days = Math.floor(duration / 86400);
  const hours = Math.floor((duration % 86400) / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;
  if (days > 0) {
    return 'more than 24 hrs';
  }
  if (duration === 0) {
    return '0 sec';
  }
  const result = [];
  if (hours === 1) {
    result.push(`${hours} hr`);
  }
  if (hours > 1) {
    result.push(`${hours} hrs`);
  }
  if (minutes > 0) {
    result.push(`${minutes} min`);
  }
  if (seconds > 0) {
    result.push(`${seconds} sec`);
  }
  if (result.length > 0) {
    return result.join(' ');
  }
  return '';
};
