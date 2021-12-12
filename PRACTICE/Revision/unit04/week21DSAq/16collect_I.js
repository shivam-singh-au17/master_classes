//       #include < iostream >
//       #include < vector >

//           using namespace std;

//       int main(int argc, char const * argv[])
//       {
//           int n;
//           cin >> n;
//           vector < int > v(n + 1), pos(n + 1);
//           for (int i = 1; i <= n; ++i) {
//               cin >> v[i];
//               pos[v[i]] = i;
//           }
//           int total_rounds = 1; // we'll always need at least one round because the input sequence will never be empty
//           for (int i = 2; i <= n; ++i) {
//               if (pos[i] < pos[i - 1]) total_rounds++;
//           }
//           cout << total_rounds << '\n';
//           return 0;
//       }


