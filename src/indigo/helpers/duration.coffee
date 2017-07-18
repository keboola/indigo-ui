module.exports = (duration, round = false) ->
  days = Math.floor(duration / 86400)
  hours = Math.floor(duration % 86400 / 3600)
  minutes = Math.floor(duration % 3600 / 60)
  seconds = duration % 60

  if days > 0
    'more than 24 hrs'
  else
    result = []
    result.push hours + ' hr'  if hours is 1
    result.push hours + ' hrs'  if hours > 1
    result.push minutes + ' min'  if minutes > 0

    if seconds > 0 && (!round || hours == 0)
      result.push seconds + ' sec'
    if result.length > 0 then result.join(' ') else ''
