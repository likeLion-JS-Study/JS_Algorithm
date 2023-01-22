# 1. 분리하여 풀이
def solution(emergency):
    arr = sorted(emergency, reverse=True)
    return [arr.index(i) + 1 for i in emergency]

# 2. 한 줄로 풀기
def solution(emergency):
  return [sorted(emergency, reverse=True).index(e) + 1 for e in emergency]