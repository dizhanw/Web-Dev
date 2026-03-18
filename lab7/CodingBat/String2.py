def double_char(str):
    result = ''
    for c in str:
        result += c * 2
    return result




def count_hi(str):
  result = 0
  for i in range(len(str)-1):
    if str[i] == 'h' and str[i+1] == 'i':
      result += 1
  return result



def cat_dog(str):
  return str.count('cat') == str.count('dog')



def count_code(s):
    count = 0
    for i in range(len(s) - 3):
        if s[i:i+2] == 'co' and s[i+3] == 'e':
            count += 1
    return count


def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)



def xyz_there(s):
    for i in range(len(s) - 2):
        if s[i:i+3] == 'xyz' and (i == 0 or s[i-1] != '.'):
            return True
    return False
