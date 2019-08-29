import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex5 {

    public static void main(String[] args) {
        // sum of two numbers
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            System.out.println("Input GPA:");
            int a = Integer.parseInt(br.readLine());

            if(a<0 || a > 100){
                System.out.println(String.format("GPA is invalid"));
            }
            else if(a>89){
                System.out.println(String.format("Grade is A+"));

            } else if (a>79) {
                System.out.println(String.format("Grade is A"));
            } else if(a>69) {
                System.out.println(String.format("Grade is B"));
            } else if (a>64){
                System.out.println(String.format("Grade is C+"));
            } else if(a>59){
                System.out.println(String.format("Grade is D+"));
            } else if(a>49){
                System.out.println(String.format("Grade is D"));
            } else if (a>47){
                System.out.println(String.format("Grade is E"));
            } else {
                System.out.println(String.format("Grade is F"));
            }

        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
