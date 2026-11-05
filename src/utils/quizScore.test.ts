import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuizResult, QUIZ_QUESTIONS } from './quizScore';

test('QUIZ_QUESTIONS contains 4 structured questions with A and B options', () => {
  assert.equal(QUIZ_QUESTIONS.length, 4);
  for (const q of QUIZ_QUESTIONS) {
    assert.ok(q.title.length > 0);
    assert.ok(q.options.A.title.length > 0);
    assert.ok(q.options.B.title.length > 0);
    assert.ok(q.cardHeadline.length > 0);
  }
});

test('calculateQuizResult returns craftsman persona for mostly A answers', () => {
  const result = calculateQuizResult({ 1: 'A', 2: 'A', 3: 'A', 4: 'B' });
  assert.equal(result.personaTitle, '디테일에 집착하는 픽셀 마법사');
  assert.equal(result.matchScore, 100);
  assert.ok(result.keyStrengths.length > 0);
});

test('calculateQuizResult returns agile builder persona for mostly B answers', () => {
  const result = calculateQuizResult({ 1: 'B', 2: 'B', 3: 'B', 4: 'A' });
  assert.equal(result.personaTitle, '속도와 유연성을 겸비한 애자일 빌더');
  assert.equal(result.matchScore, 100);
});

test('calculateQuizResult returns hybrid publisher persona for balanced answers', () => {
  const result = calculateQuizResult({ 1: 'A', 2: 'B', 3: 'A', 4: 'B' });
  assert.equal(result.personaTitle, '설계와 감성을 잇는 하이브리드 퍼블리셔');
  assert.equal(result.matchScore, 100);
});
