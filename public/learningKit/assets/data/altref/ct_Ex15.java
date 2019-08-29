import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex15 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input number:");
            int number = Integer.parseInt(br.readLine());
            String output = "";
            for(int i = 0; i <number; i ++){
                for(int k = 0; k < i; k++){
                    output += "[]";
                }
                output +="\n";
            }

            System.out.println(output);

        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
