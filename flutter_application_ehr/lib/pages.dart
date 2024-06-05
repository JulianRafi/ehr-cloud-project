import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
          child: Padding(
            Padding()
            padding: const EdgeInsets.all(24.0),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const[
                        Text('Hello', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                        SizedBox(height: 5,)
                        Text("Developer's Community", style: TextStyle(fontSize: 18,)),
                      ]
                    )
                    Icon(Icons.person)
                  ]
                )
              ]
            )
          )
        )
    );
  }
}
