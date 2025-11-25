import { Problem } from './types';

export const PROBLEMS: Problem[] = [
  {
    id: 1,
    title: 'A + B 问题',
    difficulty: '简单',
    category: 'Python 基础',
    description: '这是一个经典的入门问题。你的任务是计算两个整数的和。',
    inputFormat: '输入包含两个整数 a 和 b，以空格分隔。',
    outputFormat: '输出一个整数，即 a 和 b 的和。',
    tags: ['基础输入输出', '算术运算'],
    examples: [
      {
        input: '1 5',
        output: '6',
      },
      {
        input: '-1 1',
        output: '0'
      }
    ],
    starterCode: `
# 读取一行输入，分割成两个数，并转换成整数
try:
    a, b = map(int, input().split())
    
    # 你的任务是计算 a 和 b 的和
    result = a + b
    
    print(result)

except (ValueError, IndexError):
    print("输入格式错误，请输入两个整数，以空格分隔。")
`.trim(),
    testCases: [
        { input: '1 5', expectedOutput: '6' },
        { input: '100 200', expectedOutput: '300' },
        { input: '-10 10', expectedOutput: '0' },
        { input: '0 0', expectedOutput: '0' },
        { input: '999999999 1', expectedOutput: '1000000000' }
    ]
  },
  {
    id: 2,
    title: '两数之和',
    difficulty: '中等',
    category: '算法与数据结构',
    description: '给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** 的那 **两个** 整数，并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。',
    inputFormat: '第一行是一个以逗号分隔的整数数组。第二行是一个整数 `target`。',
    outputFormat: '输出两个以逗号分隔的下标。',
    tags: ['算法', '哈希表', '列表'],
    examples: [
      {
        input: '2,7,11,15\n9',
        output: '0,1',
        explanation: '因为 nums[0] + nums[1] == 9 ，所以返回 [0, 1] 。'
      },
      {
        input: '3,2,4\n6',
        output: '1,2'
      }
    ],
    starterCode: `
import sys

def two_sum(nums, target):
    # 在这里实现你的算法
    # ...
    # ...
    return [0, 0] # 返回结果

# 读取输入
try:
    nums_str = sys.stdin.readline().strip()
    target_str = sys.stdin.readline().strip()

    nums = list(map(int, nums_str.split(',')))
    target = int(target_str)

    result = two_sum(nums, target)
    print(','.join(map(str, result)))

except (ValueError, IndexError):
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '2,7,11,15\n9', expectedOutput: '0,1' },
        { input: '3,2,4\n6', expectedOutput: '1,2' },
        { input: '3,3\n6', expectedOutput: '0,1' },
        { input: '-1,-5,0,10\n-6', expectedOutput: '0,1' },
        { input: '1,2,3,4,5\n9', expectedOutput: '3,4' }
    ]
  },
  {
    id: 3,
    title: '字符串反转',
    difficulty: '简单',
    category: 'Python 基础',
    description: '编写一个程序，接收一个字符串作为输入，然后输出这个字符串的反转形式。',
    inputFormat: '输入一行，包含一个字符串。',
    outputFormat: '输出反转后的字符串。',
    tags: ['字符串', '切片'],
    examples: [
      {
        input: 'hello',
        output: 'olleh',
      },
      {
        input: 'Python',
        output: 'nohtyP'
      }
    ],
    starterCode: `
# 读取一行输入
s = input()

# 在这里编写你的代码来反转字符串 s
# 提示: 可以使用 Python 的切片功能 s[::-1]
reversed_s = s[::-1]

print(reversed_s)
`.trim(),
    testCases: [
        { input: 'hello', expectedOutput: 'olleh' },
        { input: 'world', expectedOutput: 'dlrow' },
        { input: '12345', expectedOutput: '54321' },
        { input: 'a', expectedOutput: 'a' },
        { input: '', expectedOutput: '' }
    ]
  },
  {
    id: 4,
    title: '判断奇偶数',
    difficulty: '简单',
    category: 'Python 基础',
    description: '给定一个整数，判断它是奇数还是偶数。',
    inputFormat: '输入一个整数。',
    outputFormat: '如果该数是偶数，输出 "Even"。如果是奇数，输出 "Odd"。',
    tags: ['条件判断', '模运算'],
    examples: [
      {
        input: '4',
        output: 'Even',
      },
      {
        input: '7',
        output: 'Odd'
      }
    ],
    starterCode: `
try:
    # 读取一个整数
    num = int(input())
    
    # 在这里编写你的代码来判断 num 是奇数还是偶数
    if num % 2 == 0:
        print("Even")
    else:
        print("Odd")

except ValueError:
    print("输入无效，请输入一个整数。")
`.trim(),
    testCases: [
        { input: '2', expectedOutput: 'Even' },
        { input: '-3', expectedOutput: 'Odd' },
        { input: '0', expectedOutput: 'Even' },
        { input: '100', expectedOutput: 'Even' },
        { input: '99', expectedOutput: 'Odd' }
    ]
  },
  {
    id: 5,
    title: '列表元素求和',
    difficulty: '简单',
    category: 'Python 基础',
    description: '计算给定整数列表的所有元素之和。',
    inputFormat: '输入一行，包含多个以空格分隔的整数。',
    outputFormat: '输出这些整数的和。',
    tags: ['列表', '内置函数sum'],
    examples: [
      {
        input: '1 2 3 4 5',
        output: '15',
      },
      {
        input: '10 -1 5',
        output: '14'
      }
    ],
    starterCode: `
try:
    # 读取一行输入，并将其转换为整数列表
    numbers = list(map(int, input().split()))
    
    # 在这里编写你的代码来计算列表中所有元素的和
    total = sum(numbers)
    
    print(total)

except ValueError:
    print("输入格式错误，请输入以空格分隔的整数。")
`.trim(),
    testCases: [
        { input: '1 2 3 4 5', expectedOutput: '15' },
        { input: '10 20 30', expectedOutput: '60' },
        { input: '-1 -2 -3', expectedOutput: '-6' },
        { input: '100', expectedOutput: '100' },
        { input: '0 0 0', expectedOutput: '0' }
    ]
  },
  {
    id: 6,
    title: '创建 NumPy 数组',
    difficulty: '简单',
    category: 'NumPy',
    description: '从给定的整数列表中创建一个 NumPy 数组。',
    inputFormat: '一行以空格分隔的整数。',
    outputFormat: '打印创建的 NumPy 数组。',
    tags: ['NumPy', '数组创建'],
    examples: [
      {
        input: '1 2 3 4 5',
        output: '[1 2 3 4 5]',
      }
    ],
    starterCode: `
import numpy as np

try:
    input_list = list(map(int, input().split()))
    
    # 使用 input_list 创建一个 NumPy 数组
    arr = np.array(input_list)
    
    print(arr)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3', expectedOutput: '[1 2 3]' },
        { input: '-1 0 1', expectedOutput: '[-1  0  1]' },
        { input: '100', expectedOutput: '[100]' },
    ]
  },
  {
    id: 7,
    title: 'NumPy 数组加法',
    difficulty: '简单',
    category: 'NumPy',
    description: '计算两个给定 NumPy 数组的元素级和。',
    inputFormat: '两行输入，每行都是以空格分隔的相同数量的整数。',
    outputFormat: '打印两个数组相加后的结果数组。',
    tags: ['NumPy', '数组运算'],
    examples: [
      {
        input: '1 2 3\n4 5 6',
        output: '[5 7 9]',
      }
    ],
    starterCode: `
import numpy as np

try:
    list1 = list(map(int, input().split()))
    list2 = list(map(int, input().split()))
    arr1 = np.array(list1)
    arr2 = np.array(list2)
    
    # 计算 arr1 和 arr2 的和
    result_arr = arr1 + arr2
    
    print(result_arr)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3\n4 5 6', expectedOutput: '[5 7 9]' },
        { input: '10 20\n30 40', expectedOutput: '[40 60]' },
        { input: '0 -1\n-1 0', expectedOutput: '[-1 -1]' },
    ]
  },
  {
    id: 8,
    title: 'NumPy 数组变形',
    difficulty: '简单',
    category: 'NumPy',
    description: '将一个一维 NumPy 数组变形为指定形状的二维数组。',
    inputFormat: '第一行是以空格分隔的整数。第二行是两个以空格分隔的整数，代表新的行数和列数。',
    outputFormat: '打印变形后的二维数组。',
    tags: ['NumPy', '数组变形'],
    examples: [
      {
        input: '1 2 3 4 5 6\n2 3',
        output: '[[1 2 3]\n [4 5 6]]',
      }
    ],
    starterCode: `
import numpy as np

try:
    elements = list(map(int, input().split()))
    shape = tuple(map(int, input().split()))
    arr = np.array(elements)
    
    # 将 arr 变形为 shape 指定的形状
    reshaped_arr = arr.reshape(shape)
    
    print(reshaped_arr)
except (ValueError, IndexError):
    print("输入格式错误或无法变形。")
`.trim(),
    testCases: [
        { input: '1 2 3 4 5 6\n2 3', expectedOutput: '[[1 2 3]\n [4 5 6]]' },
        { input: '1 2 3 4\n4 1', expectedOutput: '[[1]\n [2]\n [3]\n [4]]' },
    ]
  },
  {
    id: 9,
    title: 'NumPy 数组均值',
    difficulty: '简单',
    category: 'NumPy',
    description: '计算一个 NumPy 数组中所有元素的平均值。',
    inputFormat: '一行以空格分隔的数字。',
    outputFormat: '打印数组的平均值。',
    tags: ['NumPy', '统计计算'],
    examples: [
      {
        input: '1 2 3 4 5',
        output: '3.0',
      }
    ],
    starterCode: `
import numpy as np

try:
    elements = list(map(float, input().split()))
    arr = np.array(elements)
    
    # 计算数组 arr 的平均值
    mean_val = np.mean(arr)
    
    print(mean_val)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3 4 5', expectedOutput: '3.0' },
        { input: '10 20 30', expectedOutput: '20.0' },
        { input: '2 3', expectedOutput: '2.5' },
    ]
  },
  {
    id: 10,
    title: 'NumPy 数组筛选',
    difficulty: '中等',
    category: 'NumPy',
    description: '给定一个 NumPy 数组，筛选出所有大于给定值的元素。',
    inputFormat: '第一行是以空格分隔的整数。第二行是一个整数。',
    outputFormat: '打印筛选后包含符合条件元素的新数组。',
    tags: ['NumPy', '布尔索引'],
    examples: [
      {
        input: '1 5 2 6 3 8\n4',
        output: '[5 6 8]',
      }
    ],
    starterCode: `
import numpy as np

try:
    elements = list(map(int, input().split()))
    threshold = int(input())
    arr = np.array(elements)
    
    # 筛选出 arr 中大于 threshold 的元素
    filtered_arr = arr[arr > threshold]
    
    print(filtered_arr)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 5 2 6 3 8\n4', expectedOutput: '[5 6 8]' },
        { input: '10 20 30 40 50\n30', expectedOutput: '[40 50]' },
        { input: '1 2 3\n5', expectedOutput: '[]' },
    ]
  },
  {
    id: 11,
    title: '创建 Pandas Series',
    difficulty: '简单',
    category: 'Pandas',
    description: '从给定的数据和索引创建一个 Pandas Series。',
    inputFormat: '第一行是以逗号分隔的数据。第二行是以逗号分隔的索引。',
    outputFormat: '打印创建的 Series。',
    tags: ['Pandas', 'Series创建'],
    examples: [
      {
        input: '10,20,30\na,b,c',
        output: 'a    10\nb    20\nc    30\ndtype: int64',
      }
    ],
    starterCode: `
import pandas as pd

try:
    data = list(map(int, input().split(',')))
    index = input().split(',')
    
    # 使用 data 和 index 创建一个 Pandas Series
    s = pd.Series(data, index=index)
    
    print(s)
except (ValueError, IndexError):
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '10,20,30\na,b,c', expectedOutput: 'a    10\nb    20\nc    30\ndtype: int64' },
        { input: '100,200\nx,y', expectedOutput: 'x    100\ny    200\ndtype: int64' },
    ]
  },
  {
    id: 12,
    title: '创建 Pandas DataFrame',
    difficulty: '简单',
    category: 'Pandas',
    description: '从一个模拟的 CSV 格式字符串创建一个 Pandas DataFrame。',
    inputFormat: '多行输入。第一行是逗号分隔的列名。后续每一行是逗号分隔的数据行。输入以 "END" 结尾。',
    outputFormat: '打印创建的 DataFrame。',
    tags: ['Pandas', 'DataFrame创建', 'CSV读取'],
    examples: [
      {
        input: 'name,age\nAlice,25\nBob,30\nEND',
        output: '    name  age\n0  Alice   25\n1    Bob   30',
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

lines = []
for line in sys.stdin:
    if 'END' in line:
        break
    lines.append(line)

csv_string = "".join(lines)

# 从 csv_string 创建一个 DataFrame
# 提示: 使用 pd.read_csv 和 io.StringIO
df = pd.read_csv(io.StringIO(csv_string))

print(df)
`.trim(),
    testCases: [
        { input: 'name,age\nAlice,25\nBob,30\nEND', expectedOutput: '    name  age\n0  Alice   25\n1    Bob   30' },
        { input: 'city,country\nTokyo,Japan\nParis,France\nEND', expectedOutput: '    city country\n0  Tokyo   Japan\n1  Paris  France' },
    ]
  },
  {
    id: 13,
    title: '选择 DataFrame 的列',
    difficulty: '简单',
    category: 'Pandas',
    description: '创建一个 DataFrame 并选择其中的特定一列。',
    inputFormat: '第一行是要选择的列名。之后是多行CSV数据（包含表头），以 "END" 结尾。',
    outputFormat: '打印所选的列 (Pandas Series)。',
    tags: ['Pandas', '数据选择'],
    examples: [
      {
        input: 'age\nname,age,city\nAlice,25,New York\nBob,30,Paris\nEND',
        output: '0    25\n1    30\nName: age, dtype: int64',
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

col_to_select = sys.stdin.readline().strip()

lines = []
for line in sys.stdin:
    if 'END' in line:
        break
    lines.append(line)

csv_string = "".join(lines)
df = pd.read_csv(io.StringIO(csv_string))

# 从 df 中选择 col_to_select 这一列
selected_column = df[col_to_select]

print(selected_column)
`.trim(),
    testCases: [
        { input: 'age\nname,age,city\nAlice,25,New York\nBob,30,Paris\nEND', expectedOutput: '0    25\n1    30\nName: age, dtype: int64' },
        { input: 'country\ncity,country\nTokyo,Japan\nParis,France\nEND', expectedOutput: '0     Japan\n1    France\nName: country, dtype: object' },
    ]
  },
  {
    id: 14,
    title: 'DataFrame 数据筛选',
    difficulty: '中等',
    category: 'Pandas',
    description: '创建一个 DataFrame，并根据给定条件筛选行。支持的 operator 为 >、<、==。',
    inputFormat: '第一行是要筛选的列名。\n第二行是筛选条件，格式为 `operator,value` (例如 `>,28`)。\n之后是多行CSV数据（包含表头），以 "END" 结尾。',
    outputFormat: '打印筛选后的 DataFrame。',
    tags: ['Pandas', '数据筛选', '布尔索引'],
    examples: [
      {
        input: 'age\n>,28\nname,age,city\nAlice,25,New York\nBob,30,Paris\nCharlie,35,London\nEND',
        output: '      name  age    city\n1      Bob   30   Paris\n2  Charlie   35  London',
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

col_to_filter = sys.stdin.readline().strip()
condition = sys.stdin.readline().strip()
operator, value_str = condition.split(',')
value = int(value_str)

lines = []
for line in sys.stdin:
    if 'END' in line:
        break
    lines.append(line)

csv_string = "".join(lines)
df = pd.read_csv(io.StringIO(csv_string))

# 根据条件筛选 df
if operator == '>':
    filtered_df = df[df[col_to_filter] > value]
elif operator == '<':
    filtered_df = df[df[col_to_filter] < value]
elif operator == '==':
    filtered_df = df[df[col_to_filter] == value]
else:
    filtered_df = pd.DataFrame()

print(filtered_df)
`.trim(),
    testCases: [
        { input: 'age\n>,28\nname,age,city\nAlice,25,New York\nBob,30,Paris\nCharlie,35,London\nEND', expectedOutput: '      name  age    city\n1      Bob   30   Paris\n2  Charlie   35  London' },
        { input: 'score\n==,100\nstudent,score\nAmy,90\nBill,100\nCindy,100\nEND', expectedOutput: '  student  score\n1    Bill    100\n2   Cindy    100' },
    ]
  },
  {
    id: 15,
    title: 'DataFrame 分组聚合',
    difficulty: '中等',
    category: 'Pandas',
    description: '创建一个 DataFrame，按指定列进行分组，并计算另一列的平均值。',
    inputFormat: '第一行是要分组的列名。\n第二行是要聚合计算的列名。\n之后是多行CSV数据（包含表头），以 "END" 结尾。',
    outputFormat: '打印分组聚合后的结果 (一个 Series)。',
    tags: ['Pandas', '分组聚合', 'groupby'],
    examples: [
      {
        input: 'department\nsalary\nname,department,salary\nAlice,Sales,5000\nBob,IT,8000\nCharlie,Sales,6000\nDavid,IT,9000\nEND',
        output: 'department\nIT           8500.0\nSales        5500.0\nName: salary, dtype: float64',
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

group_by_col = sys.stdin.readline().strip()
agg_col = sys.stdin.readline().strip()

lines = []
for line in sys.stdin:
    if 'END' in line:
        break
    lines.append(line)

csv_string = "".join(lines)
df = pd.read_csv(io.StringIO(csv_string))

# 按 group_by_col 分组，并计算 agg_col 的平均值
result = df.groupby(group_by_col)[agg_col].mean()

print(result)
`.trim(),
    testCases: [
        { input: 'department\nsalary\nname,department,salary\nAlice,Sales,5000\nBob,IT,8000\nCharlie,Sales,6000\nDavid,IT,9000\nEND', expectedOutput: 'department\nIT           8500.0\nSales        5500.0\nName: salary, dtype: float64' },
        { input: 'gender\nage\nname,gender,age\nTom,M,20\nJane,F,22\nMike,M,24\nSue,F,26\nEND', expectedOutput: 'gender\nF    24.0\nM    22.0\nName: age, dtype: float64' },
    ]
  },
   {
    id: 16,
    title: '查找列表最大值',
    difficulty: '简单',
    category: 'Python 基础',
    description: '给定一个整数列表，找出其中的最大值。',
    inputFormat: '输入一行，包含多个以空格分隔的整数。',
    outputFormat: '输出列表中的最大值。',
    tags: ['列表', '内置函数max'],
    examples: [
      {
        input: '1 9 2 8 5',
        output: '9',
      },
      {
        input: '-1 -5 -2',
        output: '-1'
      }
    ],
    starterCode: `
try:
    numbers = list(map(int, input().split()))
    if not numbers:
        print("列表为空")
    else:
        # 找出列表中的最大值
        max_val = max(numbers)
        print(max_val)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3 4 5', expectedOutput: '5' },
        { input: '100 0 -100', expectedOutput: '100' },
        { input: '-1 -2 -3', expectedOutput: '-1' },
    ]
  },
  {
    id: 17,
    title: '计算阶乘',
    difficulty: '简单',
    category: 'Python 基础',
    description: '计算一个非负整数的阶乘。阶乘的定义是 n! = n * (n-1) * ... * 1。规定 0! = 1。',
    inputFormat: '输入一个非负整数 n。',
    outputFormat: '输出 n 的阶乘。',
    tags: ['算法', '循环'],
    examples: [
      {
        input: '5',
        output: '120',
        explanation: '5! = 5 * 4 * 3 * 2 * 1 = 120'
      },
      {
        input: '0',
        output: '1'
      }
    ],
    starterCode: `
def factorial(n):
    if n == 0:
        return 1
    # 在这里实现阶乘计算
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

try:
    num = int(input())
    if num < 0:
        print("请输入非负整数")
    else:
        print(factorial(num))
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '5', expectedOutput: '120' },
        { input: '0', expectedOutput: '1' },
        { input: '1', expectedOutput: '1' },
        { input: '10', expectedOutput: '3628800' },
    ]
  },
  {
    id: 18,
    title: '检查回文串',
    difficulty: '简单',
    category: 'Python 基础',
    description: '判断一个字符串是否是回文串。回文串是指正读和反读都一样的字符串。',
    inputFormat: '输入一个字符串。',
    outputFormat: '如果是回文串，输出 "Yes"；否则输出 "No"。',
    tags: ['字符串', '切片', '条件判断'],
    examples: [
      {
        input: 'level',
        output: 'Yes',
      },
      {
        input: 'python',
        output: 'No'
      }
    ],
    starterCode: `
s = input()

# 判断 s 是否是回文串
if s == s[::-1]:
    print("Yes")
else:
    print("No")
`.trim(),
    testCases: [
        { input: 'level', expectedOutput: 'Yes' },
        { input: 'madam', expectedOutput: 'Yes' },
        { input: 'hello', expectedOutput: 'No' },
        { input: 'a', expectedOutput: 'Yes' },
    ]
  },
  {
    id: 19,
    title: '斐波那契数列',
    difficulty: '中等',
    category: '算法与数据结构',
    description: '计算斐波那契数列的第 n 项。斐波那契数列的定义是：F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2) for n>1。',
    inputFormat: '输入一个非负整数 n。',
    outputFormat: '输出斐波那契数列的第 n 项。',
    tags: ['算法', '递归', '动态规划'],
    examples: [
      {
        input: '5',
        output: '5',
        explanation: '数列为 0, 1, 1, 2, 3, 5, ...'
      },
       {
        input: '10',
        output: '55',
      }
    ],
    starterCode: `
def fibonacci(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

try:
    num = int(input())
    if num < 0:
        print("请输入非负整数")
    else:
        print(fibonacci(num))
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '2', expectedOutput: '1' },
        { input: '5', expectedOutput: '5' },
        { input: '10', expectedOutput: '55' },
        { input: '20', expectedOutput: '6765' },
    ]
  },
   {
    id: 20,
    title: 'NumPy 数组切片',
    difficulty: '简单',
    category: 'NumPy',
    description: '给定一个 NumPy 数组和一个范围，提取该范围内的子数组。',
    inputFormat: '第一行是以空格分隔的数字，用于创建数组。\n第二行是两个以空格分隔的整数，代表切片的起始和结束索引（不含结束）。',
    outputFormat: '打印切片后的子数组。',
    tags: ['NumPy', '索引与切片'],
    examples: [
      {
        input: '1 2 3 4 5 6 7\n2 5',
        output: '[3. 4. 5.]',
      }
    ],
    starterCode: `
import numpy as np
try:
    elements = list(map(float, input().split()))
    start, end = map(int, input().split())
    arr = np.array(elements)
    
    # 对数组 arr 进行切片
    sliced_arr = arr[start:end]
    
    print(sliced_arr)
except (ValueError, IndexError):
    print("输入格式或索引错误。")
`.trim(),
    testCases: [
        { input: '10 20 30 40 50\n1 4', expectedOutput: '[20. 30. 40.]' },
        { input: '0 1 2 3 4\n0 2', expectedOutput: '[0. 1.]' },
    ]
  },
  {
    id: 21,
    title: 'NumPy 点积',
    difficulty: '中等',
    category: 'NumPy',
    description: '计算两个一维 NumPy 数组（向量）的点积。',
    inputFormat: '两行输入，每行都是以空格分隔的相同数量的数字。',
    outputFormat: '打印两个向量的点积结果。',
    tags: ['NumPy', '线性代数', '数组运算'],
    examples: [
      {
        input: '1 2 3\n4 5 6',
        output: '32.0',
        explanation: '1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32'
      }
    ],
    starterCode: `
import numpy as np
try:
    v1 = np.array(list(map(float, input().split())))
    v2 = np.array(list(map(float, input().split())))
    
    # 计算 v1 和 v2 的点积
    dot_product = np.dot(v1, v2)
    
    print(dot_product)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3\n4 5 6', expectedOutput: '32.0' },
        { input: '10 20\n2 3', expectedOutput: '80.0' },
    ]
  },
  {
    id: 22,
    title: 'NumPy 数组堆叠',
    difficulty: '中等',
    category: 'NumPy',
    description: '将两个 NumPy 数组进行垂直堆叠。',
    inputFormat: '两行输入，每行都是以空格分隔的相同数量的数字。',
    outputFormat: '打印垂直堆叠后的新数组。',
    tags: ['NumPy', '数组操作', '堆叠'],
    examples: [
      {
        input: '1 2 3\n4 5 6',
        output: '[[1. 2. 3.]\n [4. 5. 6.]]',
      }
    ],
    starterCode: `
import numpy as np
try:
    arr1 = np.array([list(map(float, input().split()))])
    arr2 = np.array([list(map(float, input().split()))])
    
    # 垂直堆叠 arr1 和 arr2
    stacked_arr = np.vstack((arr1, arr2))
    
    print(stacked_arr)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2\n3 4', expectedOutput: '[[1. 2.]\n [3. 4.]]' },
        { input: '10 20 30\n40 50 60', expectedOutput: '[[10. 20. 30.]\n [40. 50. 60.]]' },
    ]
  },
  {
    id: 23,
    title: 'Pandas 处理缺失值',
    difficulty: '中等',
    category: 'Pandas',
    description: '创建一个包含缺失值(NaN)的 Pandas Series，然后用0填充这些缺失值。',
    inputFormat: '一行以逗号分隔的字符串，其中 "None" 代表缺失值。',
    outputFormat: '打印填充缺失值后的 Series。',
    tags: ['Pandas', '数据清洗', '缺失值处理'],
    examples: [
      {
        input: '1,2,None,4,None',
        output: '0    1.0\n1    2.0\n2    0.0\n3    4.0\n4    0.0\ndtype: float64',
      }
    ],
    starterCode: `
import pandas as pd
import numpy as np

# 将"None"字符串转为np.nan
data_str = input().split(',')
data = [float(x) if x != 'None' else np.nan for x in data_str]
s = pd.Series(data)

# 用 0 填充 s 中的缺失值
filled_s = s.fillna(0)

print(filled_s)
`.trim(),
    testCases: [
        { input: '10,None,30', expectedOutput: '0    10.0\n1     0.0\n2    30.0\ndtype: float64' },
        { input: 'None,None', expectedOutput: '0    0.0\n1    0.0\ndtype: float64' },
    ]
  },
  {
    id: 24,
    title: 'Pandas 合并 DataFrame',
    difficulty: '中等',
    category: 'Pandas',
    description: '创建两个 Pandas DataFrame 并基于共同的 "id" 列将它们合并。',
    inputFormat: '多行CSV数据，两个DataFrame之间用"---"分隔。每个DataFrame包含表头。输入以 "END" 结尾。',
    outputFormat: '打印合并后的 DataFrame。',
    tags: ['Pandas', '数据合并', 'merge'],
    examples: [
      {
        input: 'id,name\n1,Alice\n2,Bob\n---\nid,age\n1,25\n2,30\nEND',
        output: '   id   name  age\n0   1  Alice   25\n1   2    Bob   30',
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

lines1, lines2 = [], []
current_list = lines1
for line in sys.stdin:
    if 'END' in line: break
    if '---' in line:
        current_list = lines2
        continue
    current_list.append(line)

df1 = pd.read_csv(io.StringIO("".join(lines1)))
df2 = pd.read_csv(io.StringIO("".join(lines2)))

# 合并 df1 和 df2
merged_df = pd.merge(df1, df2, on='id')

print(merged_df)
`.trim(),
    testCases: [
        { input: 'id,name\n1,Alice\n2,Bob\n---\nid,city\n1,New York\n2,Paris\nEND', expectedOutput: '   id   name       city\n0   1  Alice   New York\n1   2    Bob      Paris' },
    ]
  },
  {
    id: 25,
    title: 'Pandas apply 方法',
    difficulty: '中等',
    category: 'Pandas',
    description: '创建一个 DataFrame，并使用 apply 方法将某一列的所有值乘以2。',
    inputFormat: '第一行是要操作的列名。\n之后是多行CSV数据（包含表头），以 "END" 结尾。',
    outputFormat: '打印修改后的整个 DataFrame。',
    tags: ['Pandas', '数据转换', 'apply方法'],
    examples: [
      {
        input: 'price\nitem,price\nApple,10\nBanana,5\nEND',
        output: '     item  price\n0   Apple     20\n1  Banana     10',
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

col_to_apply = sys.stdin.readline().strip()

lines = []
for line in sys.stdin:
    if 'END' in line: break
    lines.append(line)

df = pd.read_csv(io.StringIO("".join(lines)))

# 使用 apply 方法将指定列的值乘以 2
df[col_to_apply] = df[col_to_apply].apply(lambda x: x * 2)

print(df)
`.trim(),
    testCases: [
        { input: 'score\nstudent,score\nAmy,90\nBill,85\nEND', expectedOutput: '  student  score\n0     Amy    180\n1    Bill    170' },
    ]
  },
  {
    id: 26,
    title: '词频统计',
    difficulty: '中等',
    category: 'Python 基础',
    description: '给定一个单词列表，统计每个单词出现的频率。',
    inputFormat: '一行以空格分隔的单词。',
    outputFormat: '按字母顺序打印每个单词及其出现次数，格式为 "单词:次数"。',
    tags: ['字典', '字符串处理', '循环'],
    examples: [
      {
        input: 'apple banana apple orange banana apple',
        output: 'apple:3\nbanana:2\norange:1',
      }
    ],
    starterCode: `
words = input().split()
counts = {}

# 统计词频
for word in words:
    counts[word] = counts.get(word, 0) + 1

# 按字母顺序排序并打印
for word in sorted(counts):
    print(f"{word}:{counts[word]}")
`.trim(),
    testCases: [
        { input: 'a b c a b a', expectedOutput: 'a:3\nb:2\nc:1' },
        { input: 'hello world hello', expectedOutput: 'hello:2\nworld:1' },
        { input: 'test', expectedOutput: 'test:1' },
    ]
  },
  {
    id: 27,
    title: '查找唯一元素',
    difficulty: '简单',
    category: 'Python 基础',
    description: '给定一个列表，移除所有重复元素，并按原顺序输出所有唯一元素。',
    inputFormat: '一行以空格分隔的元素。',
    outputFormat: '一行以空格分隔的唯一元素。',
    tags: ['集合', '列表', '去重'],
    examples: [
      {
        input: '1 2 2 3 1 4 4',
        output: '1 2 3 4',
      }
    ],
    starterCode: `
elements = input().split()
unique_elements = []
seen = set()

for item in elements:
    if item not in seen:
        unique_elements.append(item)
        seen.add(item)

print(" ".join(unique_elements))
`.trim(),
    testCases: [
        { input: 'a b c a b', expectedOutput: 'a b c' },
        { input: '1 1 1 1', expectedOutput: '1' },
        { input: '5 4 3 2 1', expectedOutput: '5 4 3 2 1' },
    ]
  },
  {
    id: 28,
    title: '简单的类定义',
    difficulty: '中等',
    category: 'Python 基础',
    description: '定义一个 `Person` 类，它有 `name` 和 `age` 两个属性，以及一个 `introduce` 方法，该方法打印自我介绍。',
    inputFormat: '第一行是姓名，第二行是年龄。',
    outputFormat: '调用 `introduce` 方法的输出。',
    tags: ['面向对象', '类', 'OOP'],
    examples: [
      {
        input: 'Alice\n30',
        output: 'My name is Alice and I am 30 years old.',
      }
    ],
    starterCode: `
class Person:
    def __init__(self, name, age):
        # 初始化 name 和 age 属性
        self.name = name
        self.age = age

    def introduce(self):
        # 打印自我介绍
        print(f"My name is {self.name} and I am {self.age} years old.")

try:
    name = input()
    age = int(input())
    p = Person(name, age)
    p.introduce()
except ValueError:
    print("年龄输入错误。")
`.trim(),
    testCases: [
        { input: 'Bob\n25', expectedOutput: 'My name is Bob and I am 25 years old.' },
        { input: 'Charlie\n99', expectedOutput: 'My name is Charlie and I am 99 years old.' },
    ]
  },
  {
    id: 29,
    title: '质数判断',
    difficulty: '中等',
    category: '算法与数据结构',
    description: '判断一个给定的正整数是否为质数。质数是大于1的自然数中，除了1和它本身以外不再有其他因数的数。',
    inputFormat: '一个正整数 n。',
    outputFormat: '如果 n 是质数，输出 "Yes"；否则输出 "No"。',
    tags: ['算法', '循环', '数学'],
    examples: [
      { input: '7', output: 'Yes' },
      { input: '10', output: 'No' },
    ],
    starterCode: `
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

try:
    num = int(input())
    if is_prime(num):
        print("Yes")
    else:
        print("No")
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '2', expectedOutput: 'Yes' },
        { input: '1', expectedOutput: 'No' },
        { input: '13', expectedOutput: 'Yes' },
        { input: '25', expectedOutput: 'No' },
    ]
  },
  {
    id: 30,
    title: '列表推导式',
    difficulty: '简单',
    category: 'Python 基础',
    description: '使用列表推导式，生成一个新列表，其中包含给定列表中所有偶数的平方。',
    inputFormat: '一行以空格分隔的整数。',
    outputFormat: '打印一个包含结果的列表。',
    tags: ['列表', '列表推导式'],
    examples: [
      { input: '1 2 3 4 5 6', output: '[4, 16, 36]' }
    ],
    starterCode: `
try:
    numbers = list(map(int, input().split()))
    
    # 使用列表推导式筛选偶数并计算平方
    squares_of_evens = [x**2 for x in numbers if x % 2 == 0]
    
    print(squares_of_evens)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3 4 5 6', expectedOutput: '[4, 16, 36]' },
        { input: '1 3 5', expectedOutput: '[]' },
        { input: '-2 0 2 4', expectedOutput: '[4, 0, 4, 16]' },
    ]
  },
  {
    id: 31,
    title: '查找中位数',
    difficulty: '中等',
    category: '算法与数据结构',
    description: '找到一个整数列表的中位数。如果列表长度是奇数，中位数是排序后中间的那个数；如果是偶数，则是中间两个数的平均值。',
    inputFormat: '一行以空格分隔的整数。',
    outputFormat: '输出中位数。',
    tags: ['算法', '排序', '列表'],
    examples: [
        { input: '1 3 2 5 4', output: '3.0' },
        { input: '1 4 2 3', output: '2.5' },
    ],
    starterCode: `
try:
    nums = sorted(list(map(int, input().split())))
    n = len(nums)
    if n % 2 == 1:
        # 奇数长度
        median = float(nums[n//2])
    else:
        # 偶数长度
        median = (nums[n//2 - 1] + nums[n//2]) / 2.0
    print(median)
except (ValueError, IndexError):
    print("输入格式错误或列表为空。")
`.trim(),
    testCases: [
        { input: '1 3 2 5 4', expectedOutput: '3.0' },
        { input: '1 4 2 3', expectedOutput: '2.5' },
        { input: '10', expectedOutput: '10.0' },
    ]
  },
  {
    id: 32,
    title: '合并两个有序列表',
    difficulty: '中等',
    category: '算法与数据结构',
    description: '将两个已排序的整数列表合并成一个新的已排序列表。',
    inputFormat: '两行输入，每行都是以空格分隔的已排序整数。',
    outputFormat: '打印合并后的新列表。',
    tags: ['算法', '列表', '双指针'],
    examples: [
      { input: '1 3 5\n2 4 6', output: '[1, 2, 3, 4, 5, 6]' }
    ],
    starterCode: `
import sys

try:
    # Read all lines, assuming there will be at most 2
    lines = sys.stdin.readlines()
    
    line1 = lines[0].strip() if len(lines) > 0 else ""
    line2 = lines[1].strip() if len(lines) > 1 else ""

    list1 = list(map(int, line1.split())) if line1 else []
    list2 = list(map(int, line2.split())) if line2 else []

    # 合并并排序
    merged_list = sorted(list1 + list2)
    
    print(merged_list)
except (ValueError, IndexError):
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 4\n1 3 4', expectedOutput: '[1, 1, 2, 3, 4, 4]' },
        { input: '\n1 2', expectedOutput: '[1, 2]' },
        { input: '10 20\n1 5', expectedOutput: '[1, 5, 10, 20]' },
    ]
  },
  {
    id: 33,
    title: '字典键查找',
    difficulty: '简单',
    category: 'Python 基础',
    description: '给定一个预定义的字典，检查一个给定的键是否存在于字典中。',
    inputFormat: '输入一个字符串作为要查找的键。',
    outputFormat: '如果键存在，打印 "Found"；否则打印 "Not Found"。',
    tags: ['字典', '键值对', '条件判断'],
    examples: [
      { input: 'apple', output: 'Found' },
      { input: 'grape', output: 'Not Found' },
    ],
    starterCode: `
# 预定义字典
data = {'apple': 1, 'banana': 2, 'orange': 3}
key_to_find = input()

if key_to_find in data:
    print("Found")
else:
    print("Not Found")
`.trim(),
    testCases: [
        { input: 'banana', expectedOutput: 'Found' },
        { input: 'cherry', expectedOutput: 'Not Found' },
        { input: 'orange', expectedOutput: 'Found' },
    ]
  },
  {
    id: 34,
    title: '多行输入求和',
    difficulty: '简单',
    category: 'Python 基础',
    description: '读取多行输入，每行包含一个整数，直到没有更多输入为止（EOF），然后计算所有这些整数的和。',
    inputFormat: '多行，每行一个整数。',
    outputFormat: '输出所有输入整数的和。',
    tags: ['循环', '异常处理', '文件IO模拟'],
    examples: [
      { input: '1\n2\n3', output: '6' }
    ],
    starterCode: `
import sys

total = 0
# 循环读取标准输入
for line in sys.stdin:
    try:
        total += int(line.strip())
    except ValueError:
        # 忽略非整数行
        continue
print(total)
`.trim(),
    testCases: [
        { input: '10\n20\n30', expectedOutput: '60' },
        { input: '-1\n-2\n3', expectedOutput: '0' },
        { input: '100', expectedOutput: '100' },
    ]
  },
   {
    id: 35,
    title: '验证密码',
    difficulty: '中等',
    category: 'Python 基础',
    description: '验证一个密码是否符合要求：至少8个字符长，并且同时包含字母和数字。',
    inputFormat: '输入一个字符串作为密码。',
    outputFormat: '如果密码有效，输出 "Valid"；否则输出 "Invalid"。',
    tags: ['字符串方法', '条件判断', '循环'],
    examples: [
      { input: 'password123', output: 'Valid' },
      { input: 'short', output: 'Invalid' },
      { input: 'onlyletters', output: 'Invalid' },
    ],
    starterCode: `
password = input()

has_letter = False
has_digit = False
is_long_enough = len(password) >= 8

for char in password:
    if char.isalpha():
        has_letter = True
    elif char.isdigit():
        has_digit = True

if is_long_enough and has_letter and has_digit:
    print("Valid")
else:
    print("Invalid")
`.trim(),
    testCases: [
        { input: 'abc123def', expectedOutput: 'Valid' },
        { input: '1234567', expectedOutput: 'Invalid' },
        { input: 'abcdefgh', expectedOutput: 'Invalid' },
        { input: '12345678', expectedOutput: 'Invalid' },
    ]
  },
  {
    id: 36,
    title: 'FizzBuzz 问题',
    difficulty: '简单',
    category: '算法与数据结构',
    description: '编写一个程序，打印从 1 到 n 的数字。但是，对于 3 的倍数，打印 "Fizz" 代替数字；对于 5 的倍数，打印 "Buzz"；对于既是 3 又是 5 的倍数的数字，打印 "FizzBuzz"。',
    inputFormat: '一个整数 n。',
    outputFormat: '打印 n 行，每行对应一个结果。',
    tags: ['算法', '循环', '条件判断'],
    examples: [
      { 
        input: '15', 
        output: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz' 
      }
    ],
    starterCode: `
try:
    n = int(input())
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '5', expectedOutput: '1\n2\nFizz\n4\nBuzz' },
        { input: '15', expectedOutput: '1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz' }
    ]
  },
  {
    id: 37,
    title: '检查变位词 (Anagram)',
    difficulty: '简单',
    category: 'Python 基础',
    description: '给定两个字符串 s 和 t，判断 t 是否是 s 的变位词。变位词是指两个字符串包含完全相同的字符，但顺序可能不同。',
    inputFormat: '两行输入，每行一个字符串。',
    outputFormat: '如果是变位词，输出 "Yes"；否则输出 "No"。',
    tags: ['字符串', '排序', '哈希表'],
    examples: [
      { input: 'anagram\nnagaram', output: 'Yes' },
      { input: 'rat\ncar', output: 'No' }
    ],
    starterCode: `
s1 = input()
s2 = input()

# 使用排序方法判断是否为变位词
if sorted(s1) == sorted(s2):
    print("Yes")
else:
    print("No")
`.trim(),
    testCases: [
        { input: 'anagram\nnagaram', expectedOutput: 'Yes' },
        { input: 'rat\ncar', expectedOutput: 'No' },
        { input: 'listen\nsilent', expectedOutput: 'Yes' }
    ]
  },
  {
    id: 38,
    title: '有效的括号',
    difficulty: '中等',
    category: '算法与数据结构',
    description: '给定一个只包括 \'(\'，\')\'，\'{\'，\'}\'，\'[\'，\']\' 的字符串 s ，判断字符串是否有效。有效字符串需满足：1. 左括号必须用相同类型的右括号闭合。2. 左括号必须以正确的顺序闭合。',
    inputFormat: '一个只包含括号的字符串。',
    outputFormat: '如果有效，输出 "Yes"；否则输出 "No"。',
    tags: ['算法', '栈', '数据结构'],
    examples: [
      { input: '()[]{}', output: 'Yes' },
      { input: '(]', output: 'No' }
    ],
    starterCode: `
def is_valid(s):
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    return not stack

s = input()
if is_valid(s):
    print("Yes")
else:
    print("No")
`.trim(),
    testCases: [
        { input: '()', expectedOutput: 'Yes' },
        { input: '()[]{}', expectedOutput: 'Yes' },
        { input: '(]', expectedOutput: 'No' },
        { input: '([)]', expectedOutput: 'No' },
        { input: '{[]}', expectedOutput: 'Yes' }
    ]
  },
  {
    id: 39,
    title: 'NumPy 矩阵乘法',
    difficulty: '中等',
    category: 'NumPy',
    description: '计算两个给定 NumPy 矩阵的乘积。',
    inputFormat: '两组矩阵数据。每组第一行是矩阵的行数和列数（r c）。接下来 r 行是矩阵的元素，每行 c 个数字，以空格分隔。两组数据之间用 "---" 分隔。',
    outputFormat: '打印两个矩阵相乘后的结果矩阵。',
    tags: ['NumPy', '线性代数', '矩阵运算'],
    examples: [
      {
        input: '2 3\n1 2 3\n4 5 6\n---\n3 2\n7 8\n9 10\n11 12',
        output: '[[ 58  64]\n [139 154]]'
      }
    ],
    starterCode: `
import numpy as np
import sys

def read_matrix():
    shape = list(map(int, sys.stdin.readline().split()))
    rows = []
    for _ in range(shape[0]):
        rows.append(list(map(int, sys.stdin.readline().split())))
    return np.array(rows)

try:
    mat1 = read_matrix()
    sys.stdin.readline() # consume '---'
    mat2 = read_matrix()

    # 计算矩阵乘积
    result = np.matmul(mat1, mat2)

    print(result)
except:
    print("输入格式错误或矩阵无法相乘。")
`.trim(),
    testCases: [
        { input: '2 2\n1 2\n3 4\n---\n2 2\n5 6\n7 8', expectedOutput: '[[19 22]\n [43 50]]' },
        { input: '2 3\n1 2 3\n4 5 6\n---\n3 2\n7 8\n9 10\n11 12', expectedOutput: '[[ 58  64]\n [139 154]]' }
    ]
  },
  {
    id: 40,
    title: 'NumPy 广播',
    difficulty: '中等',
    category: 'NumPy',
    description: '给定一个矩阵和一个一维数组，利用 NumPy 的广播机制将一维数组加到矩阵的每一行。',
    inputFormat: '第一行是矩阵的行数和列数（r c）。接下来 r 行是矩阵的元素。最后一行是一维数组的元素（c 个）。',
    outputFormat: '打印广播相加后的结果矩阵。',
    tags: ['NumPy', '广播', '数组运算'],
    examples: [
      {
        input: '3 3\n1 2 3\n4 5 6\n7 8 9\n10 20 30',
        output: '[[11 22 33]\n [14 25 36]\n [17 28 39]]'
      }
    ],
    starterCode: `
import numpy as np
import sys

try:
    shape = list(map(int, sys.stdin.readline().split()))
    rows = []
    for _ in range(shape[0]):
        rows.append(list(map(int, sys.stdin.readline().split())))
    matrix = np.array(rows)
    vector = np.array(list(map(int, sys.stdin.readline().split())))

    # 使用广播将 vector 加到 matrix 的每一行
    result = matrix + vector

    print(result)
except:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '3 3\n1 2 3\n4 5 6\n7 8 9\n10 20 30', expectedOutput: '[[11 22 33]\n [14 25 36]\n [17 28 39]]' },
        { input: '2 2\n1 1\n2 2\n100 200', expectedOutput: '[[101 201]\n [102 202]]' }
    ]
  },
  {
    id: 41,
    title: 'NumPy 标准差',
    difficulty: '简单',
    category: 'NumPy',
    description: '计算一个 NumPy 数组中所有元素的标准差。',
    inputFormat: '一行以空格分隔的数字。',
    outputFormat: '打印数组的标准差。',
    tags: ['NumPy', '统计计算'],
    examples: [
      { input: '1 2 3 4 5', output: '1.4142135623730951' }
    ],
    starterCode: `
import numpy as np

try:
    elements = list(map(float, input().split()))
    arr = np.array(elements)
    
    # 计算数组 arr 的标准差
    std_val = np.std(arr)
    
    print(std_val)
except ValueError:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3 4 5', expectedOutput: '1.4142135623730951' },
        { input: '10 10 10 10', expectedOutput: '0.0' }
    ]
  },
  {
    id: 42,
    title: 'Pandas DataFrame 排序',
    difficulty: '简单',
    category: 'Pandas',
    description: '创建一个 DataFrame 并根据指定列的值进行排序。',
    inputFormat: '第一行是要排序的列名。\n之后是多行CSV数据（包含表头），以 "END" 结尾。',
    outputFormat: '打印排序后的 DataFrame。',
    tags: ['Pandas', '数据排序', 'sort_values'],
    examples: [
      {
        input: 'age\nname,age\nAlice,30\nBob,25\nCharlie,35\nEND',
        output: '      name  age\n1      Bob   25\n0    Alice   30\n2  Charlie   35'
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

col_to_sort = sys.stdin.readline().strip()

lines = []
for line in sys.stdin:
    if 'END' in line: break
    lines.append(line)

df = pd.read_csv(io.StringIO("".join(lines)))

# 按 col_to_sort 升序排序
sorted_df = df.sort_values(by=col_to_sort)

print(sorted_df)
`.trim(),
    testCases: [
        { input: 'age\nname,age\nAlice,30\nBob,25\nCharlie,35\nEND', expectedOutput: '      name  age\n1      Bob   25\n0    Alice   30\n2  Charlie   35' },
        { input: 'name\nname,age\nCharlie,35\nAlice,30\nBob,25\nEND', expectedOutput: '      name  age\n1    Alice   30\n2      Bob   25\n0  Charlie   35' }
    ]
  },
  {
    id: 43,
    title: 'Pandas 删除列',
    difficulty: '简单',
    category: 'Pandas',
    description: '创建一个 DataFrame 并删除指定的一列。',
    inputFormat: '第一行是要删除的列名。\n之后是多行CSV数据（包含表头），以 "END" 结尾。',
    outputFormat: '打印删除列后的 DataFrame。',
    tags: ['Pandas', '数据操作', 'drop'],
    examples: [
      {
        input: 'city\nname,age,city\nAlice,25,New York\nBob,30,Paris\nEND',
        output: '    name  age\n0  Alice   25\n1    Bob   30'
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

col_to_drop = sys.stdin.readline().strip()

lines = []
for line in sys.stdin:
    if 'END' in line: break
    lines.append(line)

df = pd.read_csv(io.StringIO("".join(lines)))

# 删除指定列
df_dropped = df.drop(columns=[col_to_drop])

print(df_dropped)
`.trim(),
    testCases: [
      { input: 'city\nname,age,city\nAlice,25,New York\nBob,30,Paris\nEND', expectedOutput: '    name  age\n0  Alice   25\n1    Bob   30' }
    ]
  },
  {
    id: 44,
    title: 'Pandas 添加新列',
    difficulty: '简单',
    category: 'Pandas',
    description: '创建一个 DataFrame 并添加一个新列。新列的值是现有两列的和。',
    inputFormat: '第一行是新列的名称。\n第二行是要相加的两个列名，以逗号分隔。\n之后是多行CSV数据（包含表头），以 "END" 结尾。',
    outputFormat: '打印添加新列后的 DataFrame。',
    tags: ['Pandas', '数据操作', '列运算'],
    examples: [
      {
        input: 'total_score\nmath,english\nstudent,math,english\nAmy,90,85\nBill,80,95\nEND',
        output: '  student  math  english  total_score\n0     Amy    90       85          175\n1    Bill    80       95          175'
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

new_col_name = sys.stdin.readline().strip()
cols_to_sum = sys.stdin.readline().strip().split(',')

lines = []
for line in sys.stdin:
    if 'END' in line: break
    lines.append(line)

df = pd.read_csv(io.StringIO("".join(lines)))

# 添加新列
df[new_col_name] = df[cols_to_sum[0]] + df[cols_to_sum[1]]

print(df)
`.trim(),
    testCases: [
      { input: 'total_score\nmath,english\nstudent,math,english\nAmy,90,85\nBill,80,95\nEND', expectedOutput: '  student  math  english  total_score\n0     Amy    90       85          175\n1    Bill    80       95          175' }
    ]
  },
  {
    id: 45,
    title: 'Pandas 数据透视表',
    difficulty: '困难',
    category: 'Pandas',
    description: '从给定的数据创建一个数据透视表，以总结数据。',
    inputFormat: '第一行是要作为索引的列名。\n第二行是要作为列的列名。\n第三行是要聚合的值的列名。\n之后是多行CSV数据（包含表头），以 "END" 结尾。',
    outputFormat: '打印创建的数据透视表。',
    tags: ['Pandas', '数据聚合', 'pivot_table'],
    examples: [
      {
        input: 'department\ngender\nsalary\nname,department,gender,salary\nAlice,Sales,F,5000\nBob,IT,M,8000\nCindy,Sales,F,6000\nDavid,IT,M,9000\nEve,Sales,M,5500\nEND',
        output: 'gender          F       M\ndepartment             \nIT           NaN  8500.0\nSales     5500.0  5500.0'
      }
    ],
    starterCode: `
import pandas as pd
import io
import sys

index_col = sys.stdin.readline().strip()
columns_col = sys.stdin.readline().strip()
values_col = sys.stdin.readline().strip()

lines = []
for line in sys.stdin:
    if 'END' in line: break
    lines.append(line)

df = pd.read_csv(io.StringIO("".join(lines)))

# 创建数据透视表 (默认聚合函数为均值)
pivot = df.pivot_table(index=index_col, columns=columns_col, values=values_col)

print(pivot)
`.trim(),
    testCases: [
      { input: 'department\ngender\nsalary\nname,department,gender,salary\nAlice,Sales,F,5000\nBob,IT,M,8000\nCindy,Sales,F,6000\nDavid,IT,M,9000\nEve,Sales,M,5500\nEND', expectedOutput: 'gender          F       M\ndepartment             \nIT           NaN  8500.0\nSales     5500.0  5500.0' }
    ]
  },
  {
    id: 46,
    title: '合并字典',
    difficulty: '简单',
    category: 'Python 基础',
    description: '给定两个字典，将它们合并成一个新字典。如果存在相同的键，第二个字典的值将覆盖第一个字典的值。',
    inputFormat: '两行输入，每行是一个 "key:value,key:value,..." 格式的字符串。',
    outputFormat: '按键的字母顺序，每行打印一个 "key: value" 对。',
    tags: ['字典', '合并'],
    examples: [
      {
        input: 'a:1,b:2\nb:3,c:4',
        output: 'a: 1\nb: 3\nc: 4'
      }
    ],
    starterCode: `
def parse_dict(s):
    d = {}
    if not s: return d
    for item in s.split(','):
        key, value = item.split(':')
        d[key.strip()] = int(value.strip())
    return d

try:
    dict1 = parse_dict(input())
    dict2 = parse_dict(input())

    # 合并字典
    merged_dict = {**dict1, **dict2}

    for key in sorted(merged_dict.keys()):
        print(f"{key}: {merged_dict[key]}")
except:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: 'a:1,b:2\nb:3,c:4', expectedOutput: 'a: 1\nb: 3\nc: 4' },
        { input: 'x:10\ny:20', expectedOutput: 'x: 10\ny: 20' },
        { input: '\nx:1', expectedOutput: 'x: 1' },
    ]
  },
  {
    id: 47,
    title: '变量交换',
    difficulty: '简单',
    category: 'Python 基础',
    description: '使用元组解包，交换两个变量的值。',
    inputFormat: '一行输入，包含两个以空格分隔的整数。',
    outputFormat: '打印交换后的两个整数，以空格分隔。',
    tags: ['元组', '解包', '变量赋值'],
    examples: [
      { input: '10 20', output: '20 10' }
    ],
    starterCode: `
try:
    a, b = map(int, input().split())
    
    # 使用元组解包交换 a 和 b 的值
    a, b = b, a
    
    print(a, b)
except:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '10 20', expectedOutput: '20 10' },
        { input: '-5 5', expectedOutput: '5 -5' },
    ]
  },
  {
    id: 48,
    title: '查找共同元素',
    difficulty: '简单',
    category: 'Python 基础',
    description: '找出两个列表中共有的元素，并按升序打印。',
    inputFormat: '两行输入，每行都是以空格分隔的整数。',
    outputFormat: '一行输出，包含排序后的共同元素，以空格分隔。',
    tags: ['集合', '交集', '列表'],
    examples: [
      { input: '1 2 3 4 5\n3 4 5 6 7', output: '3 4 5' }
    ],
    starterCode: `
try:
    set1 = set(map(int, input().split()))
    set2 = set(map(int, input().split()))

    # 找出交集并排序
    common_elements = sorted(list(set1.intersection(set2)))

    print(*common_elements)
except:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3\n4 5 6', expectedOutput: '' },
        { input: '10 20 30\n20 40 10', expectedOutput: '10 20' },
    ]
  },
  {
    id: 49,
    title: '验证邮箱格式',
    difficulty: '中等',
    category: 'Python 基础',
    description: '使用正则表达式，判断一个字符串是否是有效的邮箱地址。一个简单的有效规则是：`username@domain.extension`。',
    inputFormat: '一个字符串。',
    outputFormat: '如果有效，打印 "Valid"；否则打印 "Invalid"。',
    tags: ['正则表达式', 're模块'],
    examples: [
      { input: 'test@example.com', output: 'Valid' },
      { input: 'test@example', output: 'Invalid' },
      { input: 'test.com', output: 'Invalid' },
    ],
    starterCode: `
import re

email = input()
# 简单的邮箱验证正则表达式
pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'

if re.match(pattern, email):
    print("Valid")
else:
    print("Invalid")
`.trim(),
    testCases: [
        { input: 'test@example.com', expectedOutput: 'Valid' },
        { input: 'test.co.uk', expectedOutput: 'Invalid' },
        { input: 'user@domain', expectedOutput: 'Invalid' },
    ]
  },
  {
    id: 50,
    title: '过滤与映射',
    difficulty: '简单',
    category: 'Python 基础',
    description: '给定一个整数列表，使用 `filter` 和 `map` 函数，筛选出所有奇数，并将它们映射为其平方值。',
    inputFormat: '一行以空格分隔的整数。',
    outputFormat: '打印一个包含结果的列表。',
    tags: ['高阶函数', 'map', 'filter', 'lambda'],
    examples: [
      { input: '1 2 3 4 5', output: '[1, 9, 25]' }
    ],
    starterCode: `
try:
    numbers = list(map(int, input().split()))
    
    # 筛选奇数并计算平方
    odd_numbers = filter(lambda x: x % 2 != 0, numbers)
    squared_odds = list(map(lambda x: x**2, odd_numbers))
    
    print(squared_odds)
except:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3 4 5 6', expectedOutput: '[1, 9, 25]' },
        { input: '2 4 6', expectedOutput: '[]' },
    ]
  },
  {
    id: 51,
    title: '使用 zip 创建字典',
    difficulty: '简单',
    category: 'Python 基础',
    description: '给定两个列表（一个键列表，一个值列表），使用 `zip` 函数将它们合并成一个字典。',
    inputFormat: '第一行是以空格分隔的键。第二行是以空格分隔的值。',
    outputFormat: '按键的字母顺序，每行打印一个 "key: value" 对。',
    tags: ['字典', 'zip函数', '高阶函数'],
    examples: [
      { input: 'a b c\n1 2 3', output: 'a: 1\nb: 2\nc: 3' }
    ],
    starterCode: `
try:
    keys = input().split()
    values = map(int, input().split())

    # 使用 zip 创建字典
    my_dict = dict(zip(keys, values))

    for key in sorted(my_dict.keys()):
        print(f"{key}: {my_dict[key]}")
except:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: 'name age city\nAlice 25 NewYork', expectedOutput: 'age: 25\ncity: NewYork\nname: Alice' },
    ]
  },
  {
    id: 52,
    title: '递归求数字和',
    difficulty: '简单',
    category: '算法与数据结构',
    description: '使用递归，计算一个非负整数所有位数上的数字之和。',
    inputFormat: '一个非负整数。',
    outputFormat: '输出各位数之和。',
    tags: ['算法', '递归'],
    examples: [
      { input: '12345', output: '15' },
      { input: '99', output: '18' }
    ],
    starterCode: `
def sum_digits(n):
    if n < 10:
        return n
    else:
        return n % 10 + sum_digits(n // 10)

try:
    num = int(input())
    print(sum_digits(num))
except:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '123', expectedOutput: '6' },
        { input: '0', expectedOutput: '0' },
        { input: '9', expectedOutput: '9' },
    ]
  },
  {
    id: 53,
    title: '展平嵌套列表',
    difficulty: '中等',
    category: 'Python 基础',
    description: '将一个嵌套的列表（只含一层嵌套）展平为一个单一的列表。',
    inputFormat: '一个 Python 列表的字符串表示，例如 `[1, [2, 3], 4, [5]]`。',
    outputFormat: '打印展平后的列表。',
    tags: ['列表', '循环', '类型检查'],
    examples: [
      { input: '[1, [2, 3], 4, [5]]', output: '[1, 2, 3, 4, 5]' }
    ],
    starterCode: `
import ast

nested_list_str = input()
nested_list = ast.literal_eval(nested_list_str)

flat_list = []
for item in nested_list:
    if isinstance(item, list):
        flat_list.extend(item)
    else:
        flat_list.append(item)
        
print(flat_list)
`.trim(),
    testCases: [
        { input: '[[1, 2], [3, 4]]', expectedOutput: '[1, 2, 3, 4]' },
        { input: '[1, 2, 3]', expectedOutput: '[1, 2, 3]' },
        { input: '[]', expectedOutput: '[]' },
    ]
  },
  {
    id: 54,
    title: '集合的对称差',
    difficulty: '中等',
    category: 'Python 基础',
    description: '找出两个集合的对称差，即只存在于其中一个集合，而不同时存在于两个集合的元素。',
    inputFormat: '两行输入，每行都是以空格分隔的整数。',
    outputFormat: '一行输出，包含排序后的对称差元素，以空格分隔。',
    tags: ['集合', '对称差'],
    examples: [
      { input: '1 2 3 4\n3 4 5 6', output: '1 2 5 6' }
    ],
    starterCode: `
try:
    set1 = set(map(int, input().split()))
    set2 = set(map(int, input().split()))

    # 计算对称差
    symmetric_diff = sorted(list(set1.symmetric_difference(set2)))

    print(*symmetric_diff)
except:
    print("输入格式错误。")
`.trim(),
    testCases: [
        { input: '1 2 3\n1 2 3', expectedOutput: '' },
        { input: '10 20\n30 40', expectedOutput: '10 20 30 40' },
    ]
  },
  {
    id: 55,
    title: '提取所有数字',
    difficulty: '中等',
    category: 'Python 基础',
    description: '使用正则表达式，从一个字符串中提取出所有整数。',
    inputFormat: '一个字符串。',
    outputFormat: '打印一个包含所有提取出的整数的列表。',
    tags: ['正则表达式', 're模块', 'findall'],
    examples: [
      { input: 'I have 2 apples and 15 oranges.', output: "['2', '15']" }
    ],
    starterCode: `
import re

text = input()
# 匹配一个或多个数字
pattern = r'\\d+'

numbers = re.findall(pattern, text)
print(numbers)
`.trim(),
    testCases: [
      { input: 'abc 123 def 456', expectedOutput: "['123', '456']" },
      { input: 'no numbers here', expectedOutput: "[]" },
    ]
  },
  {
    id: 56,
    title: '按值对字典排序',
    difficulty: '中等',
    category: '算法与数据结构',
    description: '对一个字典按其值（value）进行升序排序。',
    inputFormat: '一行输入，是一个 "key:value,key:value,..." 格式的字符串。',
    outputFormat: '打印排序后的 (key, value) 元组列表。',
    tags: ['字典', '排序', 'lambda'],
    examples: [
      { input: 'apple:3,banana:1,orange:2', output: "[('banana', 1), ('orange', 2), ('apple', 3)]" }
    ],
    starterCode: `
def parse_dict(s):
    d = {}
    if not s: return d
    for item in s.split(','):
        key, value = item.split(':')
        d[key.strip()] = int(value.strip())
    return d

try:
    my_dict = parse_dict(input())

    # 按值排序
    sorted_items = sorted(my_dict.items(), key=lambda item: item[1])
    
    print(sorted_items)
except:
    print("输入格式错误。")
`.trim(),
    testCases: [
      { input: 'c:10,a:30,b:20', expectedOutput: "[('c', 10), ('b', 20), ('a', 30)]" }
    ]
  }
];