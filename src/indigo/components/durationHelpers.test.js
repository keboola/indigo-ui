import { timeInWords, durationFrom } from './durationHelpers';

describe('timeInWords', () => {
  describe('duration without round param - default', () => {
    test('0 seconds should return "0 sec"', () => {
      expect(timeInWords(0)).toBe('0 sec');
    });
    test('1 second should return "1 sec"', () => {
      expect(timeInWords(1)).toBe('1 sec');
    });
    test('59 seconds should return "59 sec"', () => {
      expect(timeInWords(59)).toBe('59 sec');
    });
    test('60 seconds should return "1 min"', () => {
      expect(timeInWords(60)).toBe('1 min');
    });
    test('61 seconds should return "1 min 1 sec"', () => {
      expect(timeInWords(61)).toBe('1 min 1 sec');
    });
    test('3599 seconds should return "59 min 59 sec"', () => {
      expect(timeInWords(3599)).toBe('59 min 59 sec');
    });
    test('3600 seconds should return "1 hr"', () => {
      expect(timeInWords(3600)).toBe('1 hr');
    });
    test('3601 seconds should return "1 hr 1 sec"', () => {
      expect(timeInWords(3601)).toBe('1 hr 1 sec');
    });
    test('3660 seconds should return "1 hr 1 min"', () => {
      expect(timeInWords(3660)).toBe('1 hr 1 min');
    });
    test('3661 seconds should return "1 hr 1 min 1 sec"', () => {
      expect(timeInWords(3661)).toBe('1 hr 1 min 1 sec');
    });
    test('86399 seconds should return "23 hr 59 min 59 sec"', () => {
      expect(timeInWords(86399)).toBe('23 hrs 59 min 59 sec');
    });
    test('86400 seconds should return "more than 24 hrs"', () => {
      expect(timeInWords(86400)).toBe('more than 24 hrs');
    });
  });

  describe('duration with round param (should trim seconds part)', () => {
    test('0 seconds should return "0 sec"', () => {
      expect(timeInWords(0, true)).toBe('0 sec');
    });
    test('1 seconds should return "1 sec"', () => {
      expect(timeInWords(1, true)).toBe('1 sec');
    });
    test('59 seconds should return "59 sec"', () => {
      expect(timeInWords(59, true)).toBe('59 sec');
    });
    test('60 seconds should return "1 min"', () => {
      expect(timeInWords(60, true)).toBe('1 min');
    });
    test('61 seconds should return "1 min 1 sec"', () => {
      expect(timeInWords(61, true)).toBe('1 min 1 sec');
    });
    test('3599 seconds should return "59 min 59 sec"', () => {
      expect(timeInWords(3599, true)).toBe('59 min 59 sec');
    });
    test('3600 seconds should return "1 hr"', () => {
      expect(timeInWords(3600, true)).toBe('1 hr');
    });
    test('3601 seconds should return "1 hr"', () => {
      expect(timeInWords(3601, true)).toBe('1 hr');
    });
    test('3660 seconds should return "1 hr 1 min"', () => {
      expect(timeInWords(3660, true)).toBe('1 hr 1 min');
    });
    test('3661 seconds should return "1 hr 1 min"', () => {
      expect(timeInWords(3661, true)).toBe('1 hr 1 min');
    });
    test('86399 seconds should return "23 hr 59 min"', () => {
      expect(timeInWords(86399, true)).toBe('23 hrs 59 min');
    });
    test('86400 seconds should return "more than 24 hrs"', () => {
      expect(timeInWords(86400, true)).toBe('more than 24 hrs');
    });
  });

  describe('Duration function', () => {
    test('should calculate valid duration', () => {
      expect(
        durationFrom('Wed Nov 21 2018 14:50:24 GMT+0100', 'Wed Nov 21 2018 15:50:24 GMT+0100')
      ).toBe(3600);
      expect(
        durationFrom('Wed Nov 21 2018 14:50:24 GMT+0100', 'Wed Nov 21 2018 13:50:24 GMT+0100')
      ).toBe(-3600);
    });
  });
});
