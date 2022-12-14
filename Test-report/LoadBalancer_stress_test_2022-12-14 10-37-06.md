# LoadBalancer test from the 2022-12-14 10-37-06 

The test measure the time it takes to respond to 5000 requests with 1000 request per second<br>
It

## RESULT

It takes 2.0211s on average to fully process a requests. 36% of PUT request were successfully returned<br>

You can find more detailed result below <br>
##
```
✔️  Successful Run: 226    100%       ❌ Failed Run: 0        0%       ⏱️  Avg. Duration: 0.79220s
✔️  Successful Run: 693    100%       ❌ Failed Run: 0        0%       ⏱️  Avg. Duration: 0.83750s
✔️  Successful Run: 969    100%       ❌ Failed Run: 0        0%       ⏱️  Avg. Duration: 1.08905s
✔️  Successful Run: 1181    90%       ❌ Failed Run: 117     10%       ⏱️  Avg. Duration: 1.29966s
✔️  Successful Run: 1647    68%       ❌ Failed Run: 753     32%       ⏱️  Avg. Duration: 1.84098s
✔️  Successful Run: 1834    47%       ❌ Failed Run: 2066    53%       ⏱️  Avg. Duration: 2.02110s
✔️  Successful Run: 1834    36%       ❌ Failed Run: 3166    64%       ⏱️  Avg. Duration: 2.02110s


RESULT
-------------------------------------
Success Count:    1834  (36%)
Failed Count:     3166  (64%)

Durations (Avg):
  DNS                  :0.0000s
  Connection           :0.4344s
  TLS                  :0.4901s
  Request Write        :0.0002s
  Server Processing    :1.0964s
  Response Read        :0.0000s
  Total                :2.0211s

Status Code (Message) :Count
  200 (OK)    :1834

Error Distribution (Count:Reason):
  3154     :connection timeout
  12       :read timeout
```
