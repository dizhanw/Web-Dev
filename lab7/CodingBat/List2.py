
def count_evens(nums):
  count = 0
  for i in range(len(nums)):
      if(nums[i] % 2 == 0):
        count += 1
  return count



def big_diff(nums):
    largest = nums[0]
    smallest = nums[0]
    for num in nums[1:]:
        if num > largest:
            largest = num
        if num < smallest:
            smallest = num
    return largest - smallest



def centered_average(nums):
    smallest = min(nums)
    largest = max(nums)
    total = sum(nums) - smallest - largest
    return total // (len(nums) - 2)



def sum13(nums):
    total = 0
    skip_next = False
    
    for num in nums:
        if skip_next:
            skip_next = False
            continue
        if num == 13:
            skip_next = True
            continue
        total += num
    return total



def sum67(nums):
    total = 0
    in_section = False
    
    for num in nums:
        if num == 6:
            in_section = True
            continue
        if in_section:
            if num == 7:
                in_section = False
            continue
        total += num
    
    return total




def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False
