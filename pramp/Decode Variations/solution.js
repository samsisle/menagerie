/**
 * Source : https://www.pramp.com/challenge/r1Kw0vwG6OhK9AEGAy6L
 * Author : Samuel Ko
 * Date   : 2019-07-19
 *
 * Time Complexity  :  ?
 * Space Complexity :  ?
 */

// function decodeVariations(S, INDEX START) {
// 	/**
// 	@param S: string
// 	@return: integer
// 	*/
  // return Recur(S,0);
// }
 
// Recur(S, int startIndex)
//   {
//     if(map.contains(S))
//       return  map.get();
//     int result=0;
//     if(startIndex==s.length()-1 || startIndex+1==s.length()-1)
//       return 1;

//       result+=Recur(S,startIndex+1);
//     if(S.beginswithNumLessThanEquals26()
//     result+=Recur(S,startIndex+2);
//   }

  //620
  //6 2 0
  //6 2 2, 6 22 -->2 ways
  //6 (27) 2 7 ==>1 way as result
// function decodeVariations(S):
//     N = S.length
//     dp = new Array(N)
//     dp[N] = 1 // value of dp at i is number of ways you can decode the string starting at index i
     
//     for i from N-1 to 0:
//         if S[i] == '0':
//             dp[i] = 0
//         else if S[i] == '1':
//             dp[i] = dp[i+1] + dp[i+2]
//         else if S[i] == '2':
//             dp[i] = dp[i+1]
//             if i+1 < S.length && S[i+1] <= '6':
//                 dp[i] += dp[i+2]
//         else:
//             dp[i] = dp[i+1]

//     return dp[0]



//1272

// A 272
//   B 72
//     G 2
//       B

// L 72
//   G 2
//     B
    
//     return result

// 1262
// A 262
//   B 62
//     F 2
//       B
//   Z 2
//     B
// L 62
//   F 2
//     B
    
// 3287489237489237 -->already solved.
// optimization save it.
// Map<String, numWays(Integer)>
// 2, B
// 262 BFB, ZB
// 1262 ABFB, AZB, LFB

// 1262, 3

    
    
//   Recur(622, 0)
//     Recur(622,1)
//       START+1
//       RECUR(622,2)
//         RETURN 1
//       RECUR(622,3)
//         RETURN 1
  
  
  //2 ---> 1 way 
  //34 ---> 1 way , 25 ---> 2 ways
  //3 digits ---> 1 digit (2digit) or 2digits (1digit)
// 	return output;
// }
