const blacklist = [
  'best drug',
  'what is the best drug',
  'what\'s the best drug',
  'which is the best drug',
  'what best drug',
  'which best drug',
  'what is best drug',
  'what\'s best drug',
  'which is best drug',
  'the best drug',
  'most best drug',
  'what\'s the best drug to take',
  'what is the best drug to take',
  'which is the best drug to take',
  'what\'s best drug to take',
  'what is best drug to take',
  'which is best drug to take',
  'what best drug to take',
  'which best drug to take',
  'best drug to take',
  'best drugs',
  'what are the best drugs',
  'what\'s the best drugs',
  'what best drugs',
  'which best drugs',
  'what are best drugs',
  'which are best drugs',
  'what are the best drugs to take',
  'which are the best drugs to take',
  'what are best drugs to take',
  'which are best drugs to take',
  'what best drugs to take',
  'which best drugs to take',
  'best drugs to take',
  'drug best',
  'drug is best',
  'drug is the best',
  'what drug is best',
  'which drug is best',
  'what drug is the best',
  'which drug is the best',
  'what drug is best to take',
  'which drug is best to take',
  'what drug is the best to take',
  'which drug is the best to take',
  'drug is the best to take',
  'drug is best to take',
  'drug best to take',
  'drugs are best',
  'what drugs are best',
  'which drugs are best',
  'what drugs are the best',
  'which drugs are the best',
  'what drugs are best to take',
  'which drugs are best to take',
  'what drugs are the best to take',
  'which drugs are the best to take',
  'bestest drug',
  'what is the bestest drug',
  'what\'s the bestest drug',
  'which is the bestest drug',
  'what bestest drug',
  'which bestest drug',
  'what is bestest drug',
  'what\'s bestest drug',
  'which is bestest drug',
  'the bestest drug',
  'most bestest drug',
  'what\'s the bestest drug to take',
  'what is the bestest drug to take',
  'which is the bestest drug to take',
  'what\'s bestest drug to take',
  'what is bestest drug to take',
  'which is bestest drug to take',
  'what bestest drug to take',
  'which bestest drug to take',
  'bestest drug to take',
  'bestest drugs',
  'what are the bestest drugs',
  'what\'s the bestest drugs',
  'what bestest drugs',
  'which bestest drugs',
  'what are bestest drugs',
  'which are bestest drugs',
  'what are the bestest drugs to take',
  'which are the bestest drugs to take',
  'what are bestest drugs to take',
  'which are bestest drugs to take',
  'what bestest drugs to take',
  'which bestest drugs to take',
  'bestest drugs to take',
  'drug bestest',
  'drug is bestest',
  'drug is the bestest',
  'what drug is bestest',
  'which drug is bestest',
  'what drug is the bestest',
  'which drug is the bestest',
  'what drug is bestest to take',
  'which drug is bestest to take',
  'what drug is the bestest to take',
  'which drug is the bestest to take',
  'drug is the bestest to take',
  'drug is bestest to take',
  'drug bestest to take',
  'drugs are bestest',
  'what drugs are bestest',
  'which drugs are bestest',
  'what drugs are the bestest',
  'which drugs are the bestest',
  'what drugs are bestest to take',
  'which drugs are bestest to take',
  'what drugs are the bestest to take',
  'which drugs are the bestest to take',
  'greatest drug',
  'what is the greatest drug',
  'what\'s the greatest drug',
  'which is the greatest drug',
  'what greatest drug',
  'which greatest drug',
  'what is greatest drug',
  'what\'s greatest drug',
  'which is greatest drug',
  'the greatest drug',
  'most greatest drug',
  'what\'s the greatest drug to take',
  'what is the greatest drug to take',
  'which is the greatest drug to take',
  'what\'s greatest drug to take',
  'what is greatest drug to take',
  'which is greatest drug to take',
  'what greatest drug to take',
  'which greatest drug to take',
  'greatest drug to take',
  'greatest drugs',
  'what are the greatest drugs',
  'what\'s the greatest drugs',
  'what greatest drugs',
  'which greatest drugs',
  'what are greatest drugs',
  'which are greatest drugs',
  'what are the greatest drugs to take',
  'which are the greatest drugs to take',
  'what are greatest drugs to take',
  'which are greatest drugs to take',
  'what greatest drugs to take',
  'which greatest drugs to take',
  'greatest drugs to take',
  'drug greatest',
  'drug is greatest',
  'drug is the greatest',
  'what drug is greatest',
  'which drug is greatest',
  'what drug is the greatest',
  'which drug is the greatest',
  'what drug is greatest to take',
  'which drug is greatest to take',
  'what drug is the greatest to take',
  'which drug is the greatest to take',
  'drug is the greatest to take',
  'drug is greatest to take',
  'drug greatest to take',
  'drugs are greatest',
  'what drugs are greatest',
  'which drugs are greatest',
  'what drugs are the greatest',
  'which drugs are the greatest',
  'what drugs are greatest to take',
  'which drugs are greatest to take',
  'what drugs are the greatest to take',
  'which drugs are the greatest to take',
  'fun drug',
  'what is the fun drug',
  'what\'s the fun drug',
  'which is the fun drug',
  'what fun drug',
  'which fun drug',
  'what is fun drug',
  'what\'s fun drug',
  'which is fun drug',
  'the fun drug',
  'most fun drug',
  'what\'s the fun drug to take',
  'what is the fun drug to take',
  'which is the fun drug to take',
  'what\'s fun drug to take',
  'what is fun drug to take',
  'which is fun drug to take',
  'what fun drug to take',
  'which fun drug to take',
  'fun drug to take',
  'fun drugs',
  'what are the fun drugs',
  'what\'s the fun drugs',
  'what fun drugs',
  'which fun drugs',
  'what are fun drugs',
  'which are fun drugs',
  'what are the fun drugs to take',
  'which are the fun drugs to take',
  'what are fun drugs to take',
  'which are fun drugs to take',
  'what fun drugs to take',
  'which fun drugs to take',
  'fun drugs to take',
  'drug fun',
  'drug is fun',
  'drug is the fun',
  'what drug is fun',
  'which drug is fun',
  'what drug is the fun',
  'which drug is the fun',
  'what drug is fun to take',
  'which drug is fun to take',
  'what drug is the fun to take',
  'which drug is the fun to take',
  'drug is the fun to take',
  'drug is fun to take',
  'drug fun to take',
  'drugs are fun',
  'what drugs are fun',
  'which drugs are fun',
  'what drugs are the fun',
  'which drugs are the fun',
  'what drugs are fun to take',
  'which drugs are fun to take',
  'what drugs are the fun to take',
  'which drugs are the fun to take',
  'funest drug',
  'what is the funest drug',
  'what\'s the funest drug',
  'which is the funest drug',
  'what funest drug',
  'which funest drug',
  'what is funest drug',
  'what\'s funest drug',
  'which is funest drug',
  'the funest drug',
  'most funest drug',
  'what\'s the funest drug to take',
  'what is the funest drug to take',
  'which is the funest drug to take',
  'what\'s funest drug to take',
  'what is funest drug to take',
  'which is funest drug to take',
  'what funest drug to take',
  'which funest drug to take',
  'funest drug to take',
  'funest drugs',
  'what are the funest drugs',
  'what\'s the funest drugs',
  'what funest drugs',
  'which funest drugs',
  'what are funest drugs',
  'which are funest drugs',
  'what are the funest drugs to take',
  'which are the funest drugs to take',
  'what are funest drugs to take',
  'which are funest drugs to take',
  'what funest drugs to take',
  'which funest drugs to take',
  'funest drugs to take',
  'drug funest',
  'drug is funest',
  'drug is the funest',
  'what drug is funest',
  'which drug is funest',
  'what drug is the funest',
  'which drug is the funest',
  'what drug is funest to take',
  'which drug is funest to take',
  'what drug is the funest to take',
  'which drug is the funest to take',
  'drug is the funest to take',
  'drug is funest to take',
  'drug funest to take',
  'drugs are funest',
  'what drugs are funest',
  'which drugs are funest',
  'what drugs are the funest',
  'which drugs are the funest',
  'what drugs are funest to take',
  'which drugs are funest to take',
  'what drugs are the funest to take',
  'which drugs are the funest to take',
  'great drug',
  'what is the great drug',
  'what\'s the great drug',
  'which is the great drug',
  'what great drug',
  'which great drug',
  'what is great drug',
  'what\'s great drug',
  'which is great drug',
  'the great drug',
  'most great drug',
  'what\'s the great drug to take',
  'what is the great drug to take',
  'which is the great drug to take',
  'what\'s great drug to take',
  'what is great drug to take',
  'which is great drug to take',
  'what great drug to take',
  'which great drug to take',
  'great drug to take',
  'great drugs',
  'what are the great drugs',
  'what\'s the great drugs',
  'what great drugs',
  'which great drugs',
  'what are great drugs',
  'which are great drugs',
  'what are the great drugs to take',
  'which are the great drugs to take',
  'what are great drugs to take',
  'which are great drugs to take',
  'what great drugs to take',
  'which great drugs to take',
  'great drugs to take',
  'drug great',
  'drug is great',
  'drug is the great',
  'what drug is great',
  'which drug is great',
  'what drug is the great',
  'which drug is the great',
  'what drug is great to take',
  'which drug is great to take',
  'what drug is the great to take',
  'which drug is the great to take',
  'drug is the great to take',
  'drug is great to take',
  'drug great to take',
  'drugs are great',
  'what drugs are great',
  'which drugs are great',
  'what drugs are the great',
  'which drugs are the great',
  'what drugs are great to take',
  'which drugs are great to take',
  'what drugs are the great to take',
  'which drugs are the great to take',
  'nice drug',
  'what is the nice drug',
  'what\'s the nice drug',
  'which is the nice drug',
  'what nice drug',
  'which nice drug',
  'what is nice drug',
  'what\'s nice drug',
  'which is nice drug',
  'the nice drug',
  'most nice drug',
  'what\'s the nice drug to take',
  'what is the nice drug to take',
  'which is the nice drug to take',
  'what\'s nice drug to take',
  'what is nice drug to take',
  'which is nice drug to take',
  'what nice drug to take',
  'which nice drug to take',
  'nice drug to take',
  'nice drugs',
  'what are the nice drugs',
  'what\'s the nice drugs',
  'what nice drugs',
  'which nice drugs',
  'what are nice drugs',
  'which are nice drugs',
  'what are the nice drugs to take',
  'which are the nice drugs to take',
  'what are nice drugs to take',
  'which are nice drugs to take',
  'what nice drugs to take',
  'which nice drugs to take',
  'nice drugs to take',
  'drug nice',
  'drug is nice',
  'drug is the nice',
  'what drug is nice',
  'which drug is nice',
  'what drug is the nice',
  'which drug is the nice',
  'what drug is nice to take',
  'which drug is nice to take',
  'what drug is the nice to take',
  'which drug is the nice to take',
  'drug is the nice to take',
  'drug is nice to take',
  'drug nice to take',
  'drugs are nice',
  'what drugs are nice',
  'which drugs are nice',
  'what drugs are the nice',
  'which drugs are the nice',
  'what drugs are nice to take',
  'which drugs are nice to take',
  'what drugs are the nice to take',
  'which drugs are the nice to take',
  'nicest drug',
  'what is the nicest drug',
  'what\'s the nicest drug',
  'which is the nicest drug',
  'what nicest drug',
  'which nicest drug',
  'what is nicest drug',
  'what\'s nicest drug',
  'which is nicest drug',
  'the nicest drug',
  'most nicest drug',
  'what\'s the nicest drug to take',
  'what is the nicest drug to take',
  'which is the nicest drug to take',
  'what\'s nicest drug to take',
  'what is nicest drug to take',
  'which is nicest drug to take',
  'what nicest drug to take',
  'which nicest drug to take',
  'nicest drug to take',
  'nicest drugs',
  'what are the nicest drugs',
  'what\'s the nicest drugs',
  'what nicest drugs',
  'which nicest drugs',
  'what are nicest drugs',
  'which are nicest drugs',
  'what are the nicest drugs to take',
  'which are the nicest drugs to take',
  'what are nicest drugs to take',
  'which are nicest drugs to take',
  'what nicest drugs to take',
  'which nicest drugs to take',
  'nicest drugs to take',
  'drug nicest',
  'drug is nicest',
  'drug is the nicest',
  'what drug is nicest',
  'which drug is nicest',
  'what drug is the nicest',
  'which drug is the nicest',
  'what drug is nicest to take',
  'which drug is nicest to take',
  'what drug is the nicest to take',
  'which drug is the nicest to take',
  'drug is the nicest to take',
  'drug is nicest to take',
  'drug nicest to take',
  'drugs are nicest',
  'what drugs are nicest',
  'which drugs are nicest',
  'what drugs are the nicest',
  'which drugs are the nicest',
  'what drugs are nicest to take',
  'which drugs are nicest to take',
  'what drugs are the nicest to take',
  'which drugs are the nicest to take',
  'cool drug',
  'what is the cool drug',
  'what\'s the cool drug',
  'which is the cool drug',
  'what cool drug',
  'which cool drug',
  'what is cool drug',
  'what\'s cool drug',
  'which is cool drug',
  'the cool drug',
  'most cool drug',
  'what\'s the cool drug to take',
  'what is the cool drug to take',
  'which is the cool drug to take',
  'what\'s cool drug to take',
  'what is cool drug to take',
  'which is cool drug to take',
  'what cool drug to take',
  'which cool drug to take',
  'cool drug to take',
  'cool drugs',
  'what are the cool drugs',
  'what\'s the cool drugs',
  'what cool drugs',
  'which cool drugs',
  'what are cool drugs',
  'which are cool drugs',
  'what are the cool drugs to take',
  'which are the cool drugs to take',
  'what are cool drugs to take',
  'which are cool drugs to take',
  'what cool drugs to take',
  'which cool drugs to take',
  'cool drugs to take',
  'drug cool',
  'drug is cool',
  'drug is the cool',
  'what drug is cool',
  'which drug is cool',
  'what drug is the cool',
  'which drug is the cool',
  'what drug is cool to take',
  'which drug is cool to take',
  'what drug is the cool to take',
  'which drug is the cool to take',
  'drug is the cool to take',
  'drug is cool to take',
  'drug cool to take',
  'drugs are cool',
  'what drugs are cool',
  'which drugs are cool',
  'what drugs are the cool',
  'which drugs are the cool',
  'what drugs are cool to take',
  'which drugs are cool to take',
  'what drugs are the cool to take',
  'which drugs are the cool to take',
  'coolest drug',
  'what is the coolest drug',
  'what\'s the coolest drug',
  'which is the coolest drug',
  'what coolest drug',
  'which coolest drug',
  'what is coolest drug',
  'what\'s coolest drug',
  'which is coolest drug',
  'the coolest drug',
  'most coolest drug',
  'what\'s the coolest drug to take',
  'what is the coolest drug to take',
  'which is the coolest drug to take',
  'what\'s coolest drug to take',
  'what is coolest drug to take',
  'which is coolest drug to take',
  'what coolest drug to take',
  'which coolest drug to take',
  'coolest drug to take',
  'coolest drugs',
  'what are the coolest drugs',
  'what\'s the coolest drugs',
  'what coolest drugs',
  'which coolest drugs',
  'what are coolest drugs',
  'which are coolest drugs',
  'what are the coolest drugs to take',
  'which are the coolest drugs to take',
  'what are coolest drugs to take',
  'which are coolest drugs to take',
  'what coolest drugs to take',
  'which coolest drugs to take',
  'coolest drugs to take',
  'drug coolest',
  'drug is coolest',
  'drug is the coolest',
  'what drug is coolest',
  'which drug is coolest',
  'what drug is the coolest',
  'which drug is the coolest',
  'what drug is coolest to take',
  'which drug is coolest to take',
  'what drug is the coolest to take',
  'which drug is the coolest to take',
  'drug is the coolest to take',
  'drug is coolest to take',
  'drug coolest to take',
  'drugs are coolest',
  'what drugs are coolest',
  'which drugs are coolest',
  'what drugs are the coolest',
  'which drugs are the coolest',
  'what drugs are coolest to take',
  'which drugs are coolest to take',
  'what drugs are the coolest to take',
  'which drugs are the coolest to take',
  'peng drug',
  'what is the peng drug',
  'what\'s the peng drug',
  'which is the peng drug',
  'what peng drug',
  'which peng drug',
  'what is peng drug',
  'what\'s peng drug',
  'which is peng drug',
  'the peng drug',
  'most peng drug',
  'what\'s the peng drug to take',
  'what is the peng drug to take',
  'which is the peng drug to take',
  'what\'s peng drug to take',
  'what is peng drug to take',
  'which is peng drug to take',
  'what peng drug to take',
  'which peng drug to take',
  'peng drug to take',
  'peng drugs',
  'what are the peng drugs',
  'what\'s the peng drugs',
  'what peng drugs',
  'which peng drugs',
  'what are peng drugs',
  'which are peng drugs',
  'what are the peng drugs to take',
  'which are the peng drugs to take',
  'what are peng drugs to take',
  'which are peng drugs to take',
  'what peng drugs to take',
  'which peng drugs to take',
  'peng drugs to take',
  'drug peng',
  'drug is peng',
  'drug is the peng',
  'what drug is peng',
  'which drug is peng',
  'what drug is the peng',
  'which drug is the peng',
  'what drug is peng to take',
  'which drug is peng to take',
  'what drug is the peng to take',
  'which drug is the peng to take',
  'drug is the peng to take',
  'drug is peng to take',
  'drug peng to take',
  'drugs are peng',
  'what drugs are peng',
  'which drugs are peng',
  'what drugs are the peng',
  'which drugs are the peng',
  'what drugs are peng to take',
  'which drugs are peng to take',
  'what drugs are the peng to take',
  'which drugs are the peng to take',
  'pengest drug',
  'what is the pengest drug',
  'what\'s the pengest drug',
  'which is the pengest drug',
  'what pengest drug',
  'which pengest drug',
  'what is pengest drug',
  'what\'s pengest drug',
  'which is pengest drug',
  'the pengest drug',
  'most pengest drug',
  'what\'s the pengest drug to take',
  'what is the pengest drug to take',
  'which is the pengest drug to take',
  'what\'s pengest drug to take',
  'what is pengest drug to take',
  'which is pengest drug to take',
  'what pengest drug to take',
  'which pengest drug to take',
  'pengest drug to take',
  'pengest drugs',
  'what are the pengest drugs',
  'what\'s the pengest drugs',
  'what pengest drugs',
  'which pengest drugs',
  'what are pengest drugs',
  'which are pengest drugs',
  'what are the pengest drugs to take',
  'which are the pengest drugs to take',
  'what are pengest drugs to take',
  'which are pengest drugs to take',
  'what pengest drugs to take',
  'which pengest drugs to take',
  'pengest drugs to take',
  'drug pengest',
  'drug is pengest',
  'drug is the pengest',
  'what drug is pengest',
  'which drug is pengest',
  'what drug is the pengest',
  'which drug is the pengest',
  'what drug is pengest to take',
  'which drug is pengest to take',
  'what drug is the pengest to take',
  'which drug is the pengest to take',
  'drug is the pengest to take',
  'drug is pengest to take',
  'drug pengest to take',
  'drugs are pengest',
  'what drugs are pengest',
  'which drugs are pengest',
  'what drugs are the pengest',
  'which drugs are the pengest',
  'what drugs are pengest to take',
  'which drugs are pengest to take',
  'what drugs are the pengest to take',
  'which drugs are the pengest to take'
]

module.exports = blacklist