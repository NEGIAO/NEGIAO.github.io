---
title: 机器学习与深度学习
date: 2024-08-01
tags: [机器学习, 深度学习, Python]
description: ML/DL 基础概念与实践笔记
icon: fas fa-brain
---

# 机器学习与深度学习笔记

## 概述

机器学习是人工智能的一个分支，它使计算机能够从数据中学习并做出决策或预测。深度学习是机器学习的一个子集，使用神经网络进行学习。

## 机器学习基础

### 监督学习

监督学习使用带标签的数据进行训练。

```python
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 划分数据集
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 训练模型
clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)

# 预测与评估
y_pred = clf.predict(X_test)
print(f"准确率: {accuracy_score(y_test, y_pred):.4f}")
```

### 无监督学习

无监督学习处理没有标签的数据。

```python
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt

# K-Means 聚类
kmeans = KMeans(n_clusters=3, random_state=42)
labels = kmeans.fit_predict(X)

# 可视化
plt.scatter(X[:, 0], X[:, 1], c=labels, cmap='viridis')
plt.scatter(kmeans.cluster_centers_[:, 0], 
            kmeans.cluster_centers_[:, 1], 
            s=300, c='red', marker='X')
plt.title('K-Means 聚类结果')
plt.show()
```

## 深度学习

### PyTorch 基础

```python
import torch
import torch.nn as nn
import torch.optim as optim

# 定义神经网络
class SimpleNet(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, num_classes)
    
    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

# 创建模型
model = SimpleNet(input_size=784, hidden_size=128, num_classes=10)

# 损失函数和优化器
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)
```

### 训练循环

```python
# 训练循环
num_epochs = 10

for epoch in range(num_epochs):
    model.train()
    running_loss = 0.0
    
    for inputs, labels in train_loader:
        # 前向传播
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        
        # 反向传播
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
        running_loss += loss.item()
    
    print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {running_loss/len(train_loader):.4f}')
```

### 卷积神经网络

```python
class CNN(nn.Module):
    def __init__(self, num_classes=10):
        super(CNN, self).__init__()
        self.conv1 = nn.Conv2d(1, 32, kernel_size=3, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=3, padding=1)
        self.pool = nn.MaxPool2d(2, 2)
        self.fc1 = nn.Linear(64 * 7 * 7, 128)
        self.fc2 = nn.Linear(128, num_classes)
        self.dropout = nn.Dropout(0.5)
    
    def forward(self, x):
        x = self.pool(torch.relu(self.conv1(x)))  # 28 -> 14
        x = self.pool(torch.relu(self.conv2(x)))  # 14 -> 7
        x = x.view(-1, 64 * 7 * 7)
        x = torch.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.fc2(x)
        return x
```

## 常用库

| 库名 | 用途 |
|------|------|
| scikit-learn | 传统机器学习 |
| PyTorch | 深度学习框架 |
| TensorFlow | 深度学习框架 |
| Pandas | 数据处理 |
| NumPy | 数值计算 |
| Matplotlib | 数据可视化 |

## 实践建议

1. **数据预处理**: 归一化、标准化
2. **防止过拟合**: Dropout、正则化、早停
3. **超参数调优**: 使用网格搜索或贝叶斯优化
4. **模型评估**: 交叉验证、混淆矩阵

## 参考资源

- [PyTorch 官方教程](https://pytorch.org/tutorials/)
- [Scikit-learn 文档](https://scikit-learn.org/stable/)
- [Deep Learning Book](https://www.deeplearningbook.org/)
