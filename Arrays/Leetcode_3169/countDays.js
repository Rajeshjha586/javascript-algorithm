// https://leetcode.com/problems/count-days-without-meetings/description

var countDays = function (days, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  let n = meetings.length;
  let ans = 0;
  let last = 1;
  for (let i = 0; i < n; i++) {
    let start = meetings[i][0];
    let end = meetings[i][1];

    if (start > last) {
      ans += i === 0 ? start - last : start - last - 1;
    }
    last = Math.max(last, end);
  }

  if (days > last) {
    ans += days - last;
  }
  return ans;
};

// Time Complexity :-  O(nlogn)
// Space Complexity :- O(1) or O(log n) (depending on sorting implementation)
